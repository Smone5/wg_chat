import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function LearnMore() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/chat');
  };

  return (
    <main className="container my-5">
      <Helmet>
        <title>Learn More - Walgreens Chatbot</title>
        <meta name="description" content="Learn more about our smart chatbot designed to assist with Walgreens-related inquiries. Discover how it works and how it can help you." />
      </Helmet>
      <article>
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold">Learn More About Our Walgreens Chatbot</h1>
          <p className="lead">Discover how our smart chatbot can assist you with Walgreens-related inquiries and enhance your customer experience.</p>
        </header>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Features</h2>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="bi bi-check-circle-fill text-primary"></i> Get information on products and services</li>
            <li className="mb-2"><i className="bi bi-check-circle-fill text-primary"></i> Receive assistance with Walgreens app and website</li>
            <li className="mb-2"><i className="bi bi-check-circle-fill text-primary"></i> Engage in a conversational way to find information</li>
            <li className="mb-2"><i className="bi bi-check-circle-fill text-primary"></i> Guide users to answers or actions based on their queries</li>
            <li className="mb-2"><i className="bi bi-check-circle-fill text-primary"></i> Remember things you said earlier in the session</li>
          </ul>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Our Approach</h2>
          <p>Unlike traditional chatbots that rely on canned responses, our chatbot strives to truly listen and understand your questions. By leveraging advanced AI technology, it processes your queries in real-time, providing accurate and helpful responses tailored to your needs.</p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">How It Works</h2>
          <ol className="list-unstyled">
            <li className="mb-2"><i className="bi bi-chevron-right text-primary"></i> You log in using your Google account, allowing us to create a unique chat session.</li>
            <li className="mb-2"><i className="bi bi-chevron-right text-primary"></i> The chatbot uses your profile information to personalize the conversation and provide relevant assistance.</li>
            <li className="mb-2"><i className="bi bi-chevron-right text-primary"></i> Our AI technology processes your queries and provides accurate and helpful responses in real-time.</li>
          </ol>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Privacy and Data Usage</h2>
          <p>Your privacy is important to us. When you log in with your Google account, we collect your profile ID to create a customized chat session. This information is used solely for providing personalized assistance and improving your experience with the chatbot. We do not share your data with third parties.</p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Future Features</h2>
          <p>We are continuously working to enhance the capabilities of our chatbot. In the future, we plan to add new features such as:</p>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="bi bi-check-circle-fill text-primary"></i> Finding the nearest Walgreens store</li>
            <li className="mb-2"><i className="bi bi-check-circle-fill text-primary"></i> Checking your prescription refill status</li>
            <li className="mb-2"><i className="bi bi-check-circle-fill text-primary"></i> Finding the best Walgreens deals and discounts</li>
          </ul>
          <p>Stay tuned for these exciting updates as we strive to provide you with the best possible experience.</p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Our Goal</h2>
          <p>Our goal is to push Walgreens to become even better. By providing some chatbot competition, we aim to enhance the customer experience. When there is competition, the Walgreens customer wins with improved services and more innovative solutions.</p>
        </section>
        <div className="text-center mb-5">
          <button
            onClick={handleGetStarted}
            className="btn btn-primary btn-lg"
          >
            Get Started
          </button>
        </div>
        <footer className="d-flex justify-content-center">
          <a className="text-primary mx-2" href="/about">About</a>
          <a className="text-primary mx-2" href="/privacy-policy">Privacy Policy</a>
          <a className="text-primary mx-2" href="/terms-of-service">Terms of Service</a>
        </footer>
        <p className="text-center text-muted mt-3">
          For inquiries, please email us at <a href="mailto:admin@aivoyages.net" className="text-primary">admin@aivoyages.net</a>.
        </p>
      </article>
    </main>
  );
}

export default LearnMore;
