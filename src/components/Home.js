import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Navigating to /chat');
    navigate('/chat');
  };

  return (
    <div className="text-center mt-5">
      <h2 style={{ color: '#0071ce' }}>Welcome to the Unofficial Walgreens Chatbot</h2>
      <p>This platform allows you to interact with a chatbot designed to assist you with various Walgreens-related inquiries and services.</p>
      <p>Please click the "Get Started" button below to continue. You will need to login with your Google credentials.</p>
      <button onClick={handleLogin} style={{ color: '#fff', backgroundColor: '#0071ce', padding: '10px', borderRadius: '5px' }}>Get Started</button>
    </div>
  );
}

export default Home;
