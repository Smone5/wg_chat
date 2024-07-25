#!/usr/bin/env python
import os
import re
import json
from pathlib import Path
from typing import Any, Dict, Union, Optional, List
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests
from langchain_community.chat_message_histories import FileChatMessageHistory
from langchain_core import __version__
from langchain_core.chat_history import BaseChatMessageHistory
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.runnables import ConfigurableFieldSpec
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_openai import ChatOpenAI
from langserve import add_routes
from uuid import uuid4
from langchain_core.messages import BaseMessage, message_to_dict, messages_from_dict
from langchain_community.utilities.redis import get_client
from typing_extensions import TypedDict

# RAG libraries
from pinecone import Pinecone, ServerlessSpec
from langchain_cohere import CohereEmbeddings
from langchain_pinecone import PineconeVectorStore
from langchain.chains import create_history_aware_retriever
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.chains import create_retrieval_chain
from langchain_core.output_parsers import StrOutputParser

from dotenv import load_dotenv
load_dotenv()

# Define the minimum required version as (0, 1, 0)
MIN_VERSION_LANGCHAIN_CORE = (0, 1, 0)
LANGCHAIN_CORE_VERSION = tuple(map(int, __version__.split(".")))

if LANGCHAIN_CORE_VERSION < MIN_VERSION_LANGCHAIN_CORE:
    raise RuntimeError(
        f"Minimum required version of langchain-core is {MIN_VERSION_LANGCHAIN_CORE}, "
        f"but found {LANGCHAIN_CORE_VERSION}"
    )

app = FastAPI(
    title="LangChain Server",
    version="1.0",
    description="Spin up a simple API server using Langchain's Runnable interfaces",
)

# Allow CORS for specific origins
origins = [
    "http://localhost:3000",  # React app running locally
    "https://844f-2603-9000-8500-5c48-7927-30e-5122-3643.ngrok-free.app",
    "https://white-sea-0302f2d0f.5.azurestaticapps.net",
    "https://www.medwellchat.com"
]

# Set all CORS enabled origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

async def _per_request_config_modifier(
    config: Dict[str, Any], request: Request
) -> Dict[str, Any]:
    """Update the config"""
    config = config.copy()
    configurable = config.get("configurable", {})

    # Extract and verify the token
    auth_header = request.headers.get("Authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Invalid authorization header")

    token = auth_header.split(" ")[1]

    try:
        user_info = verify_token(token)
        user_id = user_info.get("user_id")
    except HTTPException:
        user_id = token

    if user_id is None:
        raise HTTPException(
            status_code=400,
            detail="No user id found. Please include 'user_id' in the request payload.",
        )

    configurable["user_id"] = user_id
    config["configurable"] = configurable
    return config

def verify_google_token(token: str) -> dict:
    try:
        client_id = os.environ.get("GOOGLE_CLIENT_ID")
        idinfo = id_token.verify_oauth2_token(token, google_requests.Request(), client_id)
        return idinfo
    except ValueError as e:
        raise HTTPException(status_code=401, detail="Invalid token") from e

def verify_token(token: str) -> dict:
    client_id = os.environ.get("GOOGLE_CLIENT_ID")
    try:
        idinfo = id_token.verify_oauth2_token(token, google_requests.Request(), client_id)
        return {"user_id": idinfo.get("sub")}
    except ValueError:
        # If the token is not a valid Google token, assume it is an anonymous token (UUID)
        return {"user_id": token}

# Load RAG info
tune_ai_api = os.environ.get('TUNEAI')
REDIS_URL = os.environ.get('REDIS_URL')
cohere_api_key = os.environ.get('COHERE_API_KEY')
pinecone_api_key = os.environ.get('PINECONE_API_KEY')
cloud = os.environ.get('PINECONE_CLOUD') or 'aws'
region = os.environ.get('PINECONE_REGION') or 'us-east-1'
spec = ServerlessSpec(cloud=cloud, region=region)
pinecone_index_name = os.environ.get("PINECONE_INDEX")
pc = Pinecone(api_key=pinecone_api_key)

embeddings = CohereEmbeddings(cohere_api_key=cohere_api_key, model="embed-english-v2.0")
vectorstore = PineconeVectorStore.from_existing_index(pinecone_index_name, embeddings)
retriever = vectorstore.as_retriever()

from operator import itemgetter
from langchain_core.runnables import (
    RunnableLambda,
    ConfigurableFieldSpec,
    RunnablePassthrough,
)

def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)

context = itemgetter("input") | retriever

model = ChatOpenAI(
    openai_api_key=tune_ai_api,
    openai_api_base="https://proxy.tune.app/",
    model_name="smone/meta-llama-llama-3-70b-instruct-nitro",
    temperature=0,
)

system_prompt = """
As a Walgreens customer service representative, your task is to provide accurate and helpful responses to customer inquiries using the provided {context} and your preexisting knowledge. Your responses should be concise, specific, and focused on providing accurate information. Please enhance the depth and relevance of your responses while citing sources when providing information.

It's important to note that you are not able to complete actions such as returns or transactions at this time; your role is to assist with information only. You cannot look up order information. Additionally, when customers ask for agent or help, it generally means they are seeking human assistance, so it's important to understand and disambiguate their needs. It generally does not mean designate an agent to submit requests.

Your objective is to respond to the following customer inquiry, citing sources and providing accurate information. If you don't know the answer, simply respond with 'I don't know'.

Please provide a helpful and accurate response to the customer inquiry, ensuring that the information is relevant and sourced when necessary.

"""

qa_prompt = ChatPromptTemplate.from_messages(
    [
        ("system", system_prompt),
        MessagesPlaceholder(variable_name="history"),
        ("human", "{input}")
    ]
)

first_step = RunnablePassthrough.assign(context=context)
chain = first_step | qa_prompt | model

class RedisChatMessageHistory(BaseChatMessageHistory):
    """Chat message history stored in a Redis database, including user ID."""

    def __init__(
        self,
        session_id: str,
        user_id: str,
        url: str = "redis://localhost:6379/0",
        key_prefix: str = "message_store:",
        ttl: Optional[int] = None,
    ):
        try:
            import redis
        except ImportError:
            raise ImportError(
                "Could not import redis python package. "
                "Please install it with `pip install redis`."
            )

        try:
            self.redis_client = get_client(redis_url=url)
        except redis.exceptions.ConnectionError as error:
            logger.error(error)

        self.session_id = session_id
        self.user_id = user_id
        self.key_prefix = key_prefix
        self.ttl = ttl

    @property
    def key(self) -> str:
        """Construct the record key to use."""
        return f"{self.key_prefix}{self.session_id}:{self.user_id}"

    @property
    def messages(self) -> List[BaseMessage]:
        """Retrieve the messages from Redis."""
        _items = self.redis_client.lrange(self.key, 0, -1)
        items = [json.loads(m.decode("utf-8")) for m in _items[::-1]]
        messages = messages_from_dict(items)
        return messages

    def add_message(self, message: BaseMessage) -> None:
        """Append the message to the record in Redis."""
        self.redis_client.lpush(self.key, json.dumps(message_to_dict(message)))
        if self.ttl:
            self.redis_client.expire(self.key, self.ttl)

    def clear(self) -> None:
        """Clear session memory from Redis."""
        self.redis_client.delete(self.key)

def get_message_history(conversation_id: str, user_id: str) -> RedisChatMessageHistory:
    return RedisChatMessageHistory(conversation_id, user_id, url=REDIS_URL)

class InputChat(TypedDict):
    """Input for the chat endpoint."""

    input: str
    """Human input"""

chain_with_history = RunnableWithMessageHistory(
    chain,
    get_message_history,
    input_messages_key="input",
    history_messages_key="history",
    history_factory_config=[
        ConfigurableFieldSpec(
            id="user_id",
            annotation=str,
            name="User ID",
            description="Unique identifier for the user.",
            default="",
            is_shared=True,
        ),
        ConfigurableFieldSpec(
            id="conversation_id",
            annotation=str,
            name="Conversation ID",
            description="Unique identifier for the conversation.",
            default="",
            is_shared=True,
        ),
    ],
).with_types(input_type=InputChat)

add_routes(
    app,
    chain_with_history,
    per_req_config_modifier=_per_request_config_modifier,
    disabled_endpoints=["playground", "batch"],
)

@app.post("/new_session")
async def create_new_session(request: Request):
    auth_header = request.headers.get("Authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Invalid authorization header")

    token = auth_header.split(" ")[1]

    try:
        user_info = verify_token(token)
        user_id = user_info.get("user_id")
    except HTTPException:
        user_id = token

    if user_id is None:
        raise HTTPException(
            status_code=400,
            detail="No user id found. Please include 'user_id' in the request payload.",
        )

    new_session_id = str(uuid4())

    # Ensure that the session is created in the message history
    get_message_history(new_session_id, user_id)

    return JSONResponse(content={"conversation_id": new_session_id})

@app.post("/anonymous_session")
async def anonymous_session(request: Request):
    data = await request.json()
    user_id = data.get("user_id")
    session_id = data.get("session_id")

    if not user_id or not session_id:
        raise HTTPException(status_code=400, detail="user_id and session_id are required for anonymous session")

    # Ensure that the session is created in the message history
    get_message_history(session_id, user_id)

    return JSONResponse(content={"conversation_id": session_id, "user_id": user_id})

@app.get("/last_session")
async def get_last_session(request: Request):
    auth_header = request.headers.get("Authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Invalid authorization header")

    token = auth_header.split(" ")[1]
    user_info = verify_token(token)
    user_id = user_info.get("user_id")

    if not user_id:
        raise HTTPException(
            status_code=400,
            detail="No user id found. Please include 'user_id' in the request payload.",
        )

    # Retrieve the last session ID for the user from Redis
    redis_client = get_client(redis_url=REDIS_URL)
    session_key_pattern = f"message_store:*:{user_id}"
    session_keys = redis_client.keys(session_key_pattern)

    if not session_keys:
        return JSONResponse(content={"conversation_id": None})

    # Extract the session ID from the key
    last_session_key = session_keys[0].decode('utf-8')  # Assuming the latest session is the first one
    conversation_id = last_session_key.split(":")[1]

    return JSONResponse(content={"conversation_id": conversation_id})

@app.get("/session_messages")
async def get_session_messages(conversation_id: str, request: Request):
    auth_header = request.headers.get("Authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Invalid authorization header")

    token = auth_header.split(" ")[1]

    try:
        user_info = verify_token(token)
        user_id = user_info.get("user_id")
    except HTTPException:
        user_id = token

    if not user_id:
        raise HTTPException(
            status_code=400,
            detail="No user id found. Please include 'user_id' in the request payload.",
        )

    try:
        message_history = get_message_history(conversation_id, user_id)
        messages = message_history.messages
        messages_dict = [{"text": msg.content, "sender": "user" if msg.role == "human" else "bot"} for msg in messages]
        return JSONResponse(content={"messages": messages_dict})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
    #uvicorn.run(app, host="localhost", port=8100)
