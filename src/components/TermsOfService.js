import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

function TermsOfService() {
  return (
    <main className="container my-5">
      <Helmet>
        <title>Terms of Service - Walgreens Chatbot</title>
        <meta name="description" content="Review the terms of service for using our Walgreens chatbot, provided by AI Voyages LLC." />
      </Helmet>
      <article>
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold">Terms of Use</h1>
          <p className="lead">Review the terms of service for using our Walgreens chatbot.</p>
          <p><strong>Last Updated: July 22, 2024</strong></p>
        </header>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Acceptance of Terms</h2>
          <p>
            Welcome to the Unofficial Walgreens Chatbot, a service provided by AI Voyages LLC ("we," "us," "our"). By accessing and using this Service, you agree to comply with and be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use our Service.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Any changes will be posted on this page, and the date at the top will be updated. Your continued use of the Service after any changes constitutes your acceptance of the new Terms.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Use of the Service</h2>
          <p>
            You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Service. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the Service.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">User Accounts</h2>
          <p>
            To access certain features of the Service, you may need to log in using your Google account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Intellectual Property</h2>
          <p>
            All content and materials available through the Service, including but not limited to text, graphics, website name, code, images, and logos, are the intellectual property of AI Voyages LLC and are protected by applicable copyright and trademark law. Unauthorized use of the content may violate copyright, trademark, and other laws.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, AI Voyages LLC shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use the Service, even if AI Voyages LLC has been advised of the possibility of such damages. This includes, but is not limited to, reliance by a user on any information obtained from our Service, or that results from mistakes, omissions, interruptions, deletion of files or email, errors, defects, viruses, delays in operation or transmission, or any failure of performance.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Privacy Policy</h2>
          <p>
            Your use of the Service is also governed by our Privacy Policy, which explains how we collect, use, and disclose information about you. By using the Service, you consent to the practices described in our Privacy Policy.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to the Service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the Service, us, or third parties, or for any other reason.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law principles.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="h4 fw-bold">Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at: <a href="mailto:admin@aivoyages.net">admin@aivoyages.net</a></p>
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

export default TermsOfService;
