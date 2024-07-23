import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <main className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-light p-3">
      <article className="card shadow-lg p-4 w-100" style={{ maxWidth: '600px' }}>
        <div className="card-body text-center">
          <header>
            <h1 className="text-primary mb-4 h3">About the Unofficial Walgreens Chatbot</h1>
          </header>
          <section>
            <p className="text-muted mb-3">
              The Unofficial Walgreens Chatbot is designed to help you with your Walgreens-related inquiries. Whether you need assistance with pharmacy services, customer service, or any other Walgreens-related information, our chatbot is here to help.
            </p>
            <p className="text-muted mb-3">
              This chatbot is currently in Beta. We appreciate your feedback and suggestions to improve its performance and functionality.
            </p>
            <p className="text-muted mb-3">
              Our goal is to provide a seamless and efficient experience for Walgreens customers. We use your Google profile ID to create personalized chatbot sessions, ensuring the chatbot understands your previous conversations and can provide more accurate assistance.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

export default About;
