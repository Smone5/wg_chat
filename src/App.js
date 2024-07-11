import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idToken, setIdToken] = useState(null);
  const [retryCount, setRetryCount] = useState(0); // Track retries for login
  const navigate = useNavigate();

  const maxRetries = 3;

  const initGoogleSignIn = useCallback(() => {
    window.google.accounts.id.initialize({
      client_id: '88973414867-n6c23g65pk6q7npmbur70ifl75jpmcn8.apps.googleusercontent.com',
      callback: (response) => {
        if (response.credential) {
          setIsLoggedIn(true);
          setIdToken(response.credential);
          navigate('/chat');
          setRetryCount(0); // Reset retry count on successful login
        } else if (retryCount < maxRetries) {
          setRetryCount(retryCount + 1);
          initGoogleSignIn();
        } else {
          setIsLoggedIn(false);
          alert('Failed to log in. Please try again later.');
        }
      },
    });
    window.google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      { theme: 'outline', size: 'large' }
    );
  }, [navigate, retryCount]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = initGoogleSignIn;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    const checkTokenValidity = setInterval(() => {
      // Check if token is still valid, this is just a placeholder logic
      if (!idToken) {
        setIsLoggedIn(false);
        alert('Your session has expired. Please log in again.');
      }
    }, 60000); // Check every 60 seconds

    return () => clearInterval(checkTokenValidity);
  }, [initGoogleSignIn, idToken]);

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
      const response = await fetch('http://localhost:8080/invoke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          input: { human_input: userMessage },
          config: {
            configurable: { conversation_id: 'your_conversation_id' },
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const outputMessage = data.output || 'No output available';
      setMessages(messages => [{ text: outputMessage, sender: 'bot' }, ...messages]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(messages => [{ text: 'Error in response from server.', sender: 'bot' }, ...messages]);
    }

    setInput('');
  };

  const handleReset = () => {
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

  const resetButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '14px',
    cursor: 'pointer',
    color: '#ccc',
  };

  return (
    <div className="vh-100" style={chatStyle}>
      <div className="container my-3" style={{ background: 'rgba(0, 0, 0, 0.8)', borderRadius: '5px', padding: '1rem', position: 'relative' }}>
        {isLoggedIn ? (
          <>
            <h2 className="text-center text-white">Chat with Our Bot</h2>
            <div className="mb-3" style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '5px', padding: '10px', minHeight: '300px', maxHeight: '300px', overflowY: 'auto' }}>
              {messages.map((msg, index) => (
                <div key={index} className={`text-white p-2 my-1 ${msg.sender === 'user' ? 'bg-primary' : 'bg-secondary'}`} style={{ borderRadius: '5px' }}>
                  {msg.text}
                </div>
              ))}
              <div style={resetButtonStyle} onClick={handleReset}>Reset</div>
            </div>
            <form onSubmit={handleSubmit} className="input-group">
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
            <div id="google-signin-button"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
