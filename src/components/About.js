import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <main className="container my-5">
      <Helmet>
        <title>About Us - Walgreens Chatbot</title>
        <meta name="description" content="Learn more about the team behind the Walgreens Chatbot and our dedication to ethical reporting and continuous improvement." />
      </Helmet>
      <article>
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead">Learn more about the team behind the Walgreens Chatbot and our dedication to ethical reporting and continuous improvement.</p>
        </header>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Our Mission</h2>
          <p>
            Our mission is to enhance your experience with Walgreens by offering a smart chatbot that can efficiently handle your queries and provide accurate information. We strive to make your interactions with Walgreens seamless and convenient.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Our Values</h2>
          <p>
            We believe in the principles of ethical reporting and continuous system improvement. Our team is dedicated to maintaining the highest standards of integrity and transparency in all our operations. By focusing on these values, we aim to provide reliable and effective solutions that benefit our users.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Looking Towards the Future</h2>
          <p>
            We are committed to the future of Walgreens and its customers. Through continuous improvement and ethical practices, we aim to push Walgreens to new heights. Our dedication to innovation and excellence drives us to constantly enhance our chatbot and deliver the best possible experience to our users.
          </p>
        </section>
        <div className="text-center mb-5">
          <button
            onClick={() => window.location.href = '/learn-more'}
            className="btn btn-primary btn-lg"
          >
            Learn More
          </button>
        </div>
        <footer className="d-flex justify-content-center mb-3">
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

export default About;
