import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Navigating to /chat');
    navigate('/chat');
  };

  return (
    <main className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-light">
      <article className="card shadow-lg p-4" style={{ maxWidth: '600px', width: '100%' }}>
        <div className="card-body text-center">
          <header>
            <p className="text-danger font-weight-bold">This chatbot is currently in Beta.</p>
            <h1 className="text-primary mb-4">Unofficial Walgreens Chatbot</h1>
          </header>
          <img
            src="https://wgchat.blob.core.windows.net/images/android-chrome-192x192.png"
            alt="Chatbot assisting with Walgreens inquiries"
            className="img-fluid mb-4"
            style={{ maxHeight: '150px' }}
          />
          <section>
            <p className="text-muted mb-3">
              Connect with our chatbot to get assistance with Walgreens-related inquiries.
            </p>
            <p className="text-muted mb-3">
              Click "Get Started" below to begin. You'll be prompted to log in with your Google account.
            </p>
            <p className="text-muted mb-4">
              We use your Google profile ID to create chatbot sessions unique to you. This helps the chatbot understand what was previously said in a conversation, providing a more personalized and effective experience.
            </p>
          </section>
          <button
            onClick={handleLogin}
            className="btn btn-primary btn-block mb-3"
          >
            Get Started
          </button>
          <footer className="d-flex justify-content-center mb-3">
            <a className="text-primary mx-2" href="#privacy-policy">Privacy Policy</a>
            <a className="text-primary mx-2" href="#terms-of-service">Terms of Service</a>
          </footer>
          <p className="text-center text-muted">
            For inquiries, please email us at <a href="mailto:admin@aivoyages.net" className="text-primary">admin@aivoyages.net</a>.
          </p>
        </div>
      </article>
    </main>
  );
}

export default Home;
