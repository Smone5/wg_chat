import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRecaptcha = (value) => {
    setRecaptchaToken(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA.');
      return;
    }

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });

    e.target.reset();
    setRecaptchaToken(null); // Reset reCAPTCHA
  };

  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f6f8',
    fontFamily: 'Arial, sans-serif',
  };

  const containerStyle = {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '600px',
    border: '1px solid #e3e3e3',
  };

  const titleStyle = {
    color: '#0071ce',
    marginBottom: '1rem',
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  const formGroupStyle = {
    marginBottom: '1rem',
    textAlign: 'left',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#555',
    fontSize: '1.1rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #e3e3e3',
    fontSize: '1rem',
  };

  const textAreaStyle = {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #e3e3e3',
    fontSize: '1rem',
    height: '150px',
  };

  const buttonStyle = {
    color: '#fff',
    backgroundColor: '#0071ce',
    padding: '12px 24px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#005bb5',
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              style={inputStyle}
              onChange={handleChange}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              style={inputStyle}
              onChange={handleChange}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="message">Message</label>
            <textarea
              name="message"
              style={textAreaStyle}
              onChange={handleChange}
              required
            />
          </div>
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={handleRecaptcha}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
