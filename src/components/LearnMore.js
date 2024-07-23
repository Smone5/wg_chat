import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Make sure you have included Bootstrap Icons

function LearnMore() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/chat');
  };

  return (
    <main className="container my-5">
      <Helmet>
        <title>Learn More - Walgreens Chatbot</title>
        <meta name="description" content="Learn more about our smart and fun chatbot designed to assist with Walgreens-related inquiries. Discover how it works and how it can help you." />
      </Helmet>
      <article>
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold">Learn More About Our Walgreens Chatbot</h1>
          <p className="lead">Get help with Walgreens-related questions from our smart, fun, and innovative chatbot.</p>
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
            <li className="mb-2"><i className="bi bi-chevron-right text-primary"></i> You log in using your Google account, which allows us to create a unique chat session for you.</li>
            <li className="mb-2"><i className="bi bi-chevron-right text-primary"></i> The chatbot uses the session information to personalize the conversation and provide relevant assistance based on previous interactions.</li>
            <li className="mb-2"><i className="bi bi-chevron-right text-primary"></i> Our AI technology processes your queries and provides accurate and helpful responses in real-time.</li>
          </ol>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Privacy and Data Security</h2>
          <p>Your privacy and data security are of utmost importance to us. Here are the measures we take to ensure the safety and confidentiality of your data:</p>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="bi bi-shield-lock-fill text-primary"></i> We utilize secure APIs and databases hosted on the Azure cloud platform, renowned for its robust security protocols and compliance with industry standards.</li>
            <li className="mb-2"><i className="bi bi-shield-lock-fill text-primary"></i> User authentication is managed through Google, ensuring that your login credentials are handled by Google's secure systems, minimizing the risk of unauthorized access.</li>
            <li className="mb-2"><i className="bi bi-shield-lock-fill text-primary"></i> While we do store conversational data to enhance the chatbot experience, it is securely stored in a scalable database on Azure, protected by multiple layers of security.</li>
          </ul>
          <p>We are committed to upholding the highest standards of data security and privacy, ensuring that your personal information is always safeguarded.</p>
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
          <button onClick={handleGetStarted} className="btn btn-primary btn-lg">Get Started</button>
        </div>
        <footer className="d-flex justify-content-center">
          <a className="text-primary mx-2" href="/about">About</a>
          <a className="text-primary mx-2" href="/privacy-policy">Privacy Policy</a>
          <a className="text-primary mx-2" href="/terms-of-service">Terms of Service</a>
        </footer>
        <p className="text-center text-muted mt-3">For inquiries, please email us at <a href="mailto:admin@aivoyages.net" className="text-primary">admin@aivoyages.net</a>.</p>
      </article>
    </main>
  );
}

export default LearnMore;
