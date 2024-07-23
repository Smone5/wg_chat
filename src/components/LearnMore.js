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
            <li>Get information on products and services</li>
            <li>Receive assistance with Walgreens app and website</li>
            <li>Engage in a conversational way to find information</li>
            <li>Guide users to answers or actions based on their queries</li>
            <li>Remember things you said earlier in the session</li>
          </ul>
          <h2>Our Approach</h2>
          <p>
            Unlike traditional chatbots that rely on canned responses, our chatbot strives to truly listen and understand your questions. By leveraging advanced AI technology, it processes your queries in real-time, providing accurate and helpful responses tailored to your needs.
          </p>
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
          <h2>Future Features</h2>
          <p>
            We are continuously working to enhance the capabilities of our chatbot. In the future, we plan to add new features such as:
          </p>
          <ul>
            <li>Finding the nearest Walgreens store</li>
            <li>Checking your prescription refill status</li>
            <li>Finding the best Walgreens deals and discounts</li>
          </ul>
          <p>
            Stay tuned for these exciting updates as we strive to provide you with the best possible experience.
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
