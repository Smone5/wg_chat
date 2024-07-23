import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Contact from './components/Contact'; // Import the Contact component
import About from './components/About';
import LearnMore from './components/LearnMore';
import Layout from './components/Layout';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importing Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} /> {/* Add the Contact route */}
          <Route path="/about" element={<About />} /> {/* Add the About route */}
          <Route path="/learn-more" element={<LearnMore />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
