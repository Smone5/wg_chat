import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/styles.css';  // Assuming your main styles are here

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Navigating to /chat');
    navigate('/chat');
  };

  const handleLearnMore = () => {
    navigate('/learn-more');
  };

  return (
    <main className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-light p-3" style={{ marginTop: '-50px' }}>
      <Helmet>
        <title>Walgreens Chatbot - Innovate with Ease</title>
        <meta name="description" content="Connect with our smart and fun chatbot to get assistance with Walgreens-related inquiries. Our chatbot provides personalized and effective help based on your unique needs." />
        <meta name="keywords" content="Walgreens chatbot, Walgreens assistance, smart chatbot, Walgreens inquiries, innovative chatbot" />
      </Helmet>
      <article className="text-center">
        <header className="mb-4">
          <h1 className="display-4 fw-bold">Walgreens <span className="text-warning">Made Easy</span></h1>
        </header>
        <section className="mb-4">
          <p className="lead">Get help with Walgreens-related questions from our smart, fun, and innovative chatbot.</p>
        </section>
        <div className="d-flex justify-content-center mb-4">
          <button onClick={handleLogin} className="btn btn-warning btn-lg mx-2">Get Started</button>
          <button onClick={handleLearnMore} className="btn btn-light btn-lg mx-2">Learn More</button>
        </div>
        <p className="text-muted small mb-4">When you log in, we collect your Google profile ID to help create a customized chat session unique to you.</p>
        <footer className="d-flex justify-content-center mb-3">
          <a className="text-primary mx-2" href="/about">About</a>
          <a className="text-primary mx-2" href="/privacy-policy">Privacy Policy</a>
          <a className="text-primary mx-2" href="/terms-of-service">Terms of Service</a>
        </footer>
        <p className="text-center text-muted">For inquiries, please email us at <a href="mailto:admin@aivoyages.net" className="text-primary">admin@aivoyages.net</a>.</p>
      </article>
    </main>
  );
}

export default Home;
