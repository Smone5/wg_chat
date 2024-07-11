import React, { useState, useEffect, useCallback, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idToken, setIdToken] = useState(null);
  const [conversationId, setConversationId] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    console.log('Chat component mounted');
    return () => console.log('Chat component unmounted');
  }, []);

  const handleLogin = () => {
    console.log('User logged in');
    setIsLoggedIn(true);
    setIdToken('dummy-token');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', input);
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
  };

  const handleClear = () => {
    console.log('Clearing messages');
    setMessages([]);
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

  return (
    <div className="d-flex flex-column vh-100" style={chatStyle}>
      <div className="container my-3 flex-grow-1" style={{ background: '#fff', borderRadius: '8px', padding: '1rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isLoggedIn ? (
          <>
            <h2 className="text-center" style={{ color: '#0071ce' }}>Chat with Our Support</h2>
            <div className="mb-3" style={{ background: '#f4f6f8', borderRadius: '8px', padding: '10px', minHeight: '500px', maxHeight: '500px', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
              {messages.map((msg, index) => (
                <div key={index} className={`p-2 my-1 ${msg.sender === 'user' ? 'bg-light' : 'bg-primary text-white'}`} style={{ borderRadius: '8px' }}>
                  <Markdown>{msg.text}</Markdown>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={buttonStyle} onClick={handleClear}>Clear Text</div>
              <div style={buttonStyle} onClick={() => console.log('New conversation')}>New Conversation</div>
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
            <button onClick={handleLogin} style={buttonStyle}>Log In</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;
