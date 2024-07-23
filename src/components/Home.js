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

  const email = "admin";
  const domain = "aivoyages.net";

  return (
    <div className="page">
      <div className="container">
        <p className="beta">This chatbot is currently in Beta.</p>
        <h2 className="title">Unofficial Walgreens Chatbot</h2>
        <div className="section">
          <FaRobot className="icon" />
          <p className="paragraph">
            Connect with our chatbot to get assistance with Walgreens-related inquiries.
          </p>
        </div>
        <div className="section">
          <FaSignInAlt className="icon" />
          <p className="paragraph">
            Click "Get Started" below to begin. You'll be prompted to log in with your Google account.
          </p>
        </div>
        <div className="section">
          <FaUserShield className="icon" />
          <p className="paragraph">
            We use your Google profile ID to create chatbot sessions unique to you. This helps the chatbot understand what was previously said in a conversation, providing a more personalized and effective experience.
          </p>
        </div>
        <button
          onClick={handleLogin}
          className="button"
          onMouseEnter={(e) => (e.target.className = 'button hover')}
          onMouseLeave={(e) => (e.target.className = 'button')}
        >
          Get Started
        </button>
        <div className="links">
          <span onClick={handlePrivacy} className="link">
            Privacy Policy
          </span>
          <span onClick={handleTerms} className="link">
            Terms of Service
          </span>
        </div>
        <div className="footer">
          For inquiries, please email us at <a href={`mailto:${email}@${domain}`} className="email-link">{email}@{domain}</a>.
        </div>
      </div>
    </div>
  );
}

export default Home;
