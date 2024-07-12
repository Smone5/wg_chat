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
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '600px',
  };

  const titleStyle = {
    color: '#0071ce',
    marginBottom: '1rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const paragraphStyle = {
    color: '#555',
    marginBottom: '1.5rem',
    fontSize: '1rem',
    lineHeight: '1.5',
  };

  const buttonStyle = {
    color: '#fff',
    backgroundColor: '#0071ce',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
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
        <button onClick={handleLogin} style={buttonStyle}>Get Started</button>
      </div>
    </div>
  );
}

export default Home;
