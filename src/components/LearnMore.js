import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

function LearnMore() {
  return (
    <main className="container my-5">
      <Helmet>
        <title>Learn More - Walgreens Chatbot</title>
        <meta name="description" content="Learn more about our smart chatbot designed to assist with Walgreens-related inquiries. Discover how it works and how it can help you." />
      </Helmet>
      <article>
        <header className="mb-4">
          <h1 className="display-4 fw-bold">Learn More About Our Walgreens Chatbot</h1>
        </header>
        <section className="mb-4">
          <p className="lead">
            Our smart chatbot is designed to provide personalized assistance for all your Walgreens-related questions. By using your Google profile ID, we create a unique chat session tailored to your needs.
          </p>
          <p>
            With our chatbot, you can easily:
            <ul>
              <li>Find Walgreens store locations and hours</li>
              <li>Check prescription status</li>
              <li>Get information on products and services</li>
              <li>Receive assistance with Walgreens app and website</li>
              <li>And much more!</li>
            </ul>
          </p>
          <p>
            Our chatbot leverages advanced AI technology to understand and respond to your inquiries efficiently. Whether you have a simple question or need detailed assistance, our chatbot is here to help.
          </p>
        </section>
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

export default LearnMore;
