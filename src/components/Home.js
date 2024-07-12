import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Navigating to /chat');
    navigate('/chat');
  };

  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f6f8',
    fontFamily: 'Arial, sans-serif',
  };

  const containerStyle = {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '600px',
    border: '1px solid #e3e3e3',
  };

  const titleStyle = {
    color: '#0071ce',
    marginBottom: '1rem',
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  const paragraphStyle = {
    color: '#555',
    marginBottom: '1.5rem',
    fontSize: '1.1rem',
    lineHeight: '1.6',
  };

  const buttonStyle = {
    color: '#fff',
    backgroundColor: '#0071ce',
    padding: '12px 24px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#005bb5',
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Welcome to the Unofficial Walgreens Chatbot</h2>
        <p style={paragraphStyle}>
          Connect with our chatbot to get assistance with Walgreens-related inquiries.
        </p>
        <p style={paragraphStyle}>
          Click "Get Started" below to begin. You'll be prompted to log in with your Google account.
        </p>
        <button
          onClick={handleLogin}
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
