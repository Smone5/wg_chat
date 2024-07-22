import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRobot, FaSignInAlt, FaUserShield } from 'react-icons/fa';

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Navigating to /chat');
    navigate('/chat');
  };

  const handlePrivacy = () => {
    navigate('/privacy-policy');
  };

  const handleTerms = () => {
    navigate('/terms-of-service');
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
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '500px',
    border: '1px solid #e3e3e3',
  };

  const titleStyle = {
    color: '#0071ce',
    marginBottom: '1.5rem',
    fontSize: '2rem',
    fontWeight: '700',
  };

  const paragraphStyle = {
    color: '#555',
    marginBottom: '1.25rem',
    fontSize: '1.1rem',
    lineHeight: '1.5',
  };

  const buttonStyle = {
    color: '#fff',
    backgroundColor: '#0071ce',
    padding: '12px 24px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#005bb5',
  };

  const linkStyle = {
    color: '#0071ce',
    textDecoration: 'none',
    fontSize: '0.9rem',
    margin: '0 0.5rem',
    cursor: 'pointer',
  };

  const footerStyle = {
    marginTop: '1.5rem',
    color: '#555',
    fontSize: '0.9rem',
  };

  const emailLinkStyle = {
    color: '#0071ce',
    textDecoration: 'underline',
  };

  const iconStyle = {
    color: '#0071ce',
    fontSize: '1.5rem',
    marginRight: '0.5rem',
  };

  const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
  };

  const email = "admin";
  const domain = "aivoyages.net";

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Welcome to the Unofficial Walgreens Chatbot</h2>
        <div style={sectionStyle}>
          <FaRobot style={iconStyle} />
          <p style={paragraphStyle}>
            Connect with our chatbot to get assistance with Walgreens-related inquiries.
          </p>
        </div>
        <div style={sectionStyle}>
          <FaSignInAlt style={iconStyle} />
          <p style={paragraphStyle}>
            Click "Get Started" below to begin. You'll be prompted to log in with your Google account.
          </p>
        </div>
        <div style={sectionStyle}>
          <FaUserShield style={iconStyle} />
          <p style={paragraphStyle}>
            We use your Google profile ID to create chatbot sessions unique to you. This helps the chatbot understand what was previously said in a conversation, providing a more personalized and effective experience.
          </p>
        </div>
        <button
          onClick={handleLogin}
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Get Started
        </button>
        <div style={{ marginTop: '1rem' }}>
          <span onClick={handlePrivacy} style={linkStyle}>
            Privacy Policy
          </span>
          <span onClick={handleTerms} style={linkStyle}>
            Terms of Service
          </span>
        </div>
        <div style={footerStyle}>
          For inquiries, please email us at <a href={`mailto:${email}@${domain}`} style={emailLinkStyle}>{email}@{domain}</a>.
        </div>
      </div>
    </div>
  );
}

export default Home;
