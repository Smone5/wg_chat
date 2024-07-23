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
          <h2>Features</h2>
          <ul>
            <li>Check prescription status</li>
            <li>Get information on products and services</li>
            <li>Receive assistance with Walgreens app and website</li>
            <li>Engage in a conversational way to find information</li>
            <li>Remember things you said earlier in the session</li>
          </ul>
          <h2>How It Works</h2>
          <p>
            Our chatbot leverages advanced AI technology to understand and respond to your inquiries efficiently. Here's how it works:
          </p>
          <ol>
            <li>You log in using your Google account, allowing us to create a unique chat session.</li>
            <li>The chatbot uses your profile information to personalize the conversation and provide relevant assistance.</li>
            <li>Our AI technology processes your queries and provides accurate and helpful responses in real-time.</li>
          </ol>
          <h2>Privacy and Data Usage</h2>
          <p>
            Your privacy is important to us. When you log in with your Google account, we collect your profile ID to create a customized chat session. This information is used solely for providing personalized assistance and improving your experience with the chatbot. We do not share your data with third parties.
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
