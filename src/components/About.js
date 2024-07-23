import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <main className="container my-5">
      <Helmet>
        <title>About Us - Walgreens Chatbot</title>
        <meta name="description" content="Learn more about the team behind the Walgreens Chatbot and our dedication to ethical reporting and system improvement." />
      </Helmet>
      <article>
        <header className="mb-4">
          <h1 className="display-4 fw-bold">About Us</h1>
        </header>
        <section className="mb-4">
          <p className="lead">
            Welcome to our Walgreens Chatbot project. We are committed to providing personalized assistance for all your Walgreens-related inquiries through advanced AI technology.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to enhance your experience with Walgreens by offering a smart chatbot that can efficiently handle your queries and provide accurate information. We strive to make your interactions with Walgreens seamless and convenient.
          </p>
          <h2>Our Values</h2>
          <p>
            We believe in the principles of ethical reporting and continuous system improvement. Our team is dedicated to maintaining the highest standards of integrity and transparency in all our operations.
          </p>
          <h2>Reason for Resignation</h2>
          <p>
            I resigned from my previous position due to my dedication to ethical reporting and system improvement. It is my firm belief that maintaining ethical standards and continuously improving systems are crucial for delivering reliable and effective solutions.
          </p>
        </section>
        <footer className="d-flex justify-content-center mb-3">
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

export default About;
