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
    <main className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-light p-3">
      <article className="text-center">
        <header className="mb-4">
          <h1 className="display-4 fw-bold">Walgreens <span className="text-warning">made easy</span></h1>
        </header>
        <section className="mb-4">
          <p className="lead">
            We have created a smart chatbot to help answer your questions about Walgreens. Connect with our chatbot to get assistance with Walgreens-related inquiries.
          </p>
        </section>
        <div className="d-flex justify-content-center mb-4">
          <button
            onClick={handleLogin}
            className="btn btn-warning btn-lg mx-2"
          >
            Get started
          </button>
        </div>
        <img
          src="https://wgchat.blob.core.windows.net/images/android-chrome-192x192.png"
          alt="Chatbot assisting with Walgreens inquiries"
          className="img-fluid mb-4"
          style={{ maxHeight: '150px' }}
        />
        <footer className="d-flex justify-content-center mb-3">
          <a className="text-primary mx-2" href="/about">About</a>
          <a className="text-primary mx-2" href="/privacy-policy">Privacy Policy</a>
          <a className="text-primary mx-2" href="/terms-of-service">Terms of Service</a>
        </footer>
        <p className="text-center text-muted">
          For inquiries, please email us at <a href="mailto:admin@aivoyages.net" className="text-primary">admin@aivoyages.net</a>.
        </p>
      </article>
    </main>
  );
}

export default Home;
