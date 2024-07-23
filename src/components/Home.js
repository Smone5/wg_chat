import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '600px', width: '100%' }}>
        <div className="card-body text-center">
          <p className="text-danger font-weight-bold">This chatbot is currently in Beta.</p>
          <h2 className="text-primary mb-4">Unofficial Walgreens Chatbot</h2>
          <img
            src="https://drive.google.com/uc?export=view&id=1K0HT_wWFIJ-FLoWnW3-uToRhM29ScLdW" // Replace with your actual image URL
            alt="Chatbot"
            className="img-fluid mb-4"
            style={{ maxHeight: '150px' }}
          />
          <p className="text-muted mb-3">
            Connect with our chatbot to get assistance with Walgreens-related inquiries.
          </p>
          <p className="text-muted mb-3">
            Click "Get Started" below to begin. You'll be prompted to log in with your Google account.
          </p>
          <p className="text-muted mb-4">
            We use your Google profile ID to create chatbot sessions unique to you. This helps the chatbot understand what was previously said in a conversation, providing a more personalized and effective experience.
          </p>
          <button
            onClick={handleLogin}
            className="btn btn-primary btn-block mb-3"
          >
            Get Started
          </button>
          <div className="d-flex justify-content-center mb-3">
            <a onClick={handlePrivacy} className="text-primary mx-2" href="#privacy-policy">Privacy Policy</a>
            <a onClick={handleTerms} className="text-primary mx-2" href="#terms-of-service">Terms of Service</a>
          </div>
          <p className="text-center text-muted">
            For inquiries, please email us at <a href="mailto:admin@aivoyages.net" className="text-primary">admin@aivoyages.net</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
