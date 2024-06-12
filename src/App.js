import React, { useState, useEffect, useCallback, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Markdown from 'markdown-to-jsx';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idToken, setIdToken] = useState(null);
  const [conversationId, setConversationId] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  const initGoogleSignIn = useCallback(() => {
    window.google.accounts.id.initialize({
      client_id: '88973414867-h7amkrgb8s3onoopm4a3jaaddtjoefas.apps.googleusercontent.com', // Replace with your actual Client ID
      callback: async (response) => {
        console.log('Google Sign-In Response:', response);
        if (response.credential) {
          setIsLoggedIn(true);
          setIdToken(response.credential);
          navigate('/chat');

          try {
            const res = await fetch('https://wg-chat-3.redforest-2cd4b5e7.eastus2.azurecontainerapps.io/last_session', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${response.credential}`,
              },
            });

            if (res.ok) {
              const data = await res.json();
              const conversationId = data.conversation_id || await createNewSession(response.credential);
              setConversationId(conversationId);

              if (conversationId) {
                await fetchSessionMessages(conversationId, response.credential);
              }
            } else {
              throw new Error(`Failed to get last session: ${res.status}`);
            }
          } catch (error) {
            console.error('Error fetching last session:', error);
          }
        } else {
          setIsLoggedIn(false);
        }
      },
    });
    window.google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      { theme: 'outline', size: 'large' }
    );
  }, [navigate]);

  const createNewSession = async (token) => {
    try {
      const response = await fetch('https://wg-chat-3.redforest-2cd4b5e7.eastus2.azurecontainerapps.io/new_session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setConversationId(data.conversation_id);
      setMessages([]);
      return data.conversation_id;
    } catch (error) {
      console.error('Error creating new session:', error);
      return null;
    }
  };

  const fetchSessionMessages = async (conversationId, token) => {
    try {
      const response = await fetch(`https://wg-chat-3.redforest-2cd4b5e7.eastus2.azurecontainerapps.io/session_messages?conversation_id=${conversationId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages(data.messages || []);
    } catch (error) {
      console.error('Error fetching session messages:', error);
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = initGoogleSignIn;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, [initGoogleSignIn]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn || !idToken) {
      alert('Please log in before using the chatbot.');
      return;
    }

    const userMessage = input.trim();
    if (!userMessage) return;
    setMessages(messages => [...messages, { text: userMessage, sender: 'user' }]);
    setIsSending(true);

    try {
      //const response = await fetch('https://wg-chat-3.redforest-2cd4b5e7.eastus2.azurecontainerapps.io/invoke', {
        const response = await fetch('https://white-sea-0302f2d0f.5.azurestaticapps.net/invoke', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          input: { input: userMessage },
          config: {
            configurable: { conversation_id: conversationId },
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const outputMessage = data.output?.content || 'No output available';
      setMessages(messages => [...messages, { text: outputMessage, sender: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(messages => [...messages, { text: 'Error in response from server.', sender: 'bot' }]);
    } finally {
      setIsSending(false);
    }

    setInput('');
  };

  const handleClear = () => {
    setMessages([]);
    setInput('');
  };

  const chatStyle = {
    background: '#f4f6f8',
    margin: 0,
    padding: 0,
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  };

  const buttonStyle = {
    width: '45%',
    margin: '0 2.5%',
    fontSize: '14px',
    cursor: 'pointer',
    color: '#fff',
    backgroundColor: '#0071ce',
    border: '1px solid #0071ce',
    borderRadius: '4px',
    padding: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const sendButtonStyle = {
    backgroundColor: isSending ? '#005bb5' : '#0071ce',
    color: '#fff',
    borderRadius: '0 20px 20px 0',
    cursor: isSending ? 'not-allowed' : 'pointer',
  };

  const markdownOptions = {
    overrides: {
      a: {
        component: ({ children, ...props }) => (
          <a {...props} style={{ color: '#32CD32', fontWeight: 'bold', textDecoration: 'underline' }}>
            {children}
          </a>
        ),
      },
    },
  };

  return (
    <div className="d-flex flex-column vh-100" style={chatStyle}>
      <div className="container my-3 flex-grow-1" style={{ background: '#fff', borderRadius: '8px', padding: '1rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isLoggedIn ? (
          <>
            <h2 className="text-center" style={{ color: '#0071ce' }}>Chat with Our Support</h2>
            <div className="mb-3" style={{ background: '#f4f6f8', borderRadius: '8px', padding: '10px', minHeight: '500px', maxHeight: '500px', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
              {messages.map((msg, index) => (
                <div key={index} className={`p-2 my-1 ${msg.sender === 'user' ? 'bg-light' : 'bg-primary text-white'}`} style={{ borderRadius: '8px' }}>
                  <Markdown options={markdownOptions}>{msg.text}</Markdown>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={buttonStyle} onClick={handleClear}>Clear Text</div>
              <div style={buttonStyle} onClick={() => createNewSession(idToken)}>New Conversation</div>
            </div>
            <form onSubmit={handleSubmit} className="input-group mt-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="form-control"
                style={{ borderRadius: '20px 0 0 20px', borderColor: '#0071ce', padding: '10px' }}
              />
              <button type="submit" className="btn" style={sendButtonStyle} disabled={isSending}>Send</button>
            </form>
          </>
        ) : (
          <div className="text-center mt-5">
            <h2 style={{ color: '#0071ce' }}>Unofficial Walgreens Chatbot</h2>
            <p>Welcome to the Unofficial Walgreens Chatbot. This platform allows you to interact with a chatbot designed to assist you with various Walgreens-related inquiries and services. Please log in to continue.</p>
            <div id="google-signin-button" style={{ display: 'flex', justifyContent: 'center' }}></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Router>
    <App />
  </Router>
);
