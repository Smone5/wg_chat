import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

function PrivacyPolicy() {
  return (
    <main className="container my-5">
      <Helmet>
        <title>Privacy Policy - Walgreens Chatbot</title>
        <meta name="description" content="Learn more about our privacy policy and how we handle your personal information when you use our Walgreens chatbot." />
      </Helmet>
      <article>
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold">Privacy Policy</h1>
          <p className="lead">Learn how we handle your personal information when you use our Walgreens chatbot.</p>
        </header>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Last Updated: July 22, 2024</h2>
          <p>
            This Privacy Policy explains how AI Voyages LLC ("we", "us", "our") collects, uses, discloses, and protects your information when you use the Unofficial Walgreens Chatbot ("the Service"). By using the Service, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">1. Information We Collect</h2>
          <p>
            <strong>Personal Information:</strong> We may collect personal information that you provide when you:
          </p>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="bi bi-chevron-right text-primary"></i> Log in using your Google account, which may include your name, email address, and profile picture.</li>
            <li className="mb-2"><i className="bi bi-chevron-right text-primary"></i> Interact with the chatbot and provide information voluntarily through the chat interface.</li>
          </ul>
          <p>
            <strong>Usage Data:</strong> We may collect information on how the Service is accessed and used, such as IP addresses, browser details, pages visited, and time spent on those pages.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">2. How We Use Your Information</h2>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="bi bi-chevron-right text-primary"></i> To provide and maintain the Service.</li>
            <li className="mb-2"><i className="bi bi-chevron-right text-primary"></i> To notify you about changes to our Service.</li>
            <li className="mb-2"><i className="bi bi-chevron-right text-primary"></i> To gather analysis or valuable information to improve our Service.</li>
            <li className="mb-2"><i className="bi bi-chevron-right text-primary"></i> To monitor the usage of the Service.</li>
            <li className="mb-2"><i className="bi bi-chevron-right text-primary"></i> To detect, prevent, and address technical issues.</li>
            <li className="mb-2"><i className="bi bi-chevron-right text-primary"></i> To create unique chatbot sessions tailored to you, helping the chatbot understand previous conversations and provide a personalized experience.</li>
          </ul>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">3. Data Retention</h2>
          <p>We retain your personal information indefinitely as necessary for the purposes outlined in this Privacy Policy. We do not keep user information directly; it is managed by Google.</p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">4. Data Security</h2>
          <p>We strive to use commercially acceptable means to protect your personal information, but no method of transmission over the internet or electronic storage is 100% secure.</p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">5. Disclosure of Data</h2>
          <p>We may disclose your personal information if required by law or to protect our rights and property.</p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">6. Your Rights</h2>
          <p>You have the right to access and update your personal information, and request the deletion of your personal information.</p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">7. Third-Party Services</h2>
          <p>We may use third-party services to help provide and improve our Service. These third parties have access to your personal information only to perform tasks on our behalf.</p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">8. Children's Privacy</h2>
          <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personal information from anyone under 13.</p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">9. Changes to the Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. Changes will be posted on this page.</p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:admin@aivoyages.net">admin@aivoyages.net</a></p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">11. Data Handling Practices</h2>
          <p>User data, including chat logs, is stored indefinitely. Our Service is not designed to handle sensitive or personal information. We encourage users to avoid sharing such information through our Service.</p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Key Emphasis</h2>
          <p><strong>Important Note:</strong> Our Service is not intended to handle sensitive or personal information. We strongly encourage users to avoid sharing such information through the Service. All user information is managed by Google, and we notify users of any relevant changes or breaches through our website.</p>
        </section>
        <footer className="d-flex justify-content-center mb-3">
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

export default PrivacyPolicy;
