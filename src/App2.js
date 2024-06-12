import React, { useState, useEffect, useCallback } from 'react';
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
  const navigate = useNavigate();

  const initGoogleSignIn = useCallback(() => {
    window.google.accounts.id.initialize({
      client_id: '88973414867-h7amkrgb8s3onoopm4a3jaaddtjoefas.apps.googleusercontent.com', // Replace with your actual Client ID
      callback: async (response) => {
        console.log('Google Sign-In Response:', response); // Debugging line
        if (response.credential) {
          setIsLoggedIn(true);
          setIdToken(response.credential); // Save the ID token
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
              setConversationId(data.conversation_id || await createNewSession(response.credential));
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
      setConversationId(data.conversation_id); // Save the new conversation ID
      setMessages([]); // Clear the current conversation
      return data.conversation_id;
    } catch (error) {
      console.error('Error creating new session:', error);
      return null;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn || !idToken) {
      alert('Please log in before using the chatbot.');
      return;
    }

    const userMessage = input.trim();
    if (!userMessage) return;
    setMessages(messages => [{ text: userMessage, sender: 'user' }, ...messages]);

    try {
      const response = await fetch('https://wg-chat-3.redforest-2cd4b5e7.eastus2.azurecontainerapps.io/invoke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          input: { input: userMessage },
          config: {
            configurable: { conversation_id: conversationId }, // Use the new conversation ID
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const outputMessage = data.output?.content || 'No output available';
      setMessages(messages => [{ text: outputMessage, sender: 'bot' }, ...messages]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(messages => [{ text: 'Error in response from server.', sender: 'bot' }, ...messages]);
    }

    setInput('');
  };

  const handleClear = () => {
    setMessages([]);
    setInput('');
  };

  const chatStyle = {
    background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
    margin: 0,
    padding: 0,
    fontFamily: 'Roboto, sans-serif',
    position: 'relative',
  };

  const buttonStyle = {
    width: '45%',
    margin: '0 2.5%',
    fontSize: '14px',
    cursor: 'pointer',
    color: '#ccc',
    backgroundColor: '#333',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '5px 10px',
    textAlign: 'center',
  };

  return (
    <div className="vh-100" style={chatStyle}>
      <div className="container my-3" style={{ background: 'rgba(0, 0, 0, 0.8)', borderRadius: '5px', padding: '1rem', position: 'relative' }}>
        {isLoggedIn ? (
          <>
            <h2 className="text-center text-white">Talk to Our Support</h2>
            <div className="mb-3" style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '5px', padding: '10px', minHeight: '500px', maxHeight: '500px', overflowY: 'auto' }}>
              {messages.map((msg, index) => (
                <div key={index} className={`text-white p-2 my-1 ${msg.sender === 'user' ? 'bg-primary' : 'bg-secondary'}`} style={{ borderRadius: '5px' }}>
                  <Markdown>{msg.text}</Markdown>
                </div>
              ))}
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
                style={{ borderRadius: '20px 0 0 20px', border: '1px solid #ccc' }}
              />
              <button type="submit" className="btn btn-primary" style={{ borderRadius: '0 20px 20px 0' }}>Send</button>
            </form>
          </>
        ) : (
          <div className="text-center mt-5">
            <h2 className="text-white">Please Log In</h2>
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
