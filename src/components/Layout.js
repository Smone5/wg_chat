import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout({ children }) {
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            Independent Walgreens Expertise
            <img
              src="https://wgchat.blob.core.windows.net/images/android-chrome-192x192.png" // Replace with your icon URL
              alt="icon"
              style={{ width: '1.5rem', height: '1.5rem', marginLeft: '0.5rem' }}
            />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/learn-more' ? 'active' : ''}`} to="/learn-more">Learn More</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/privacy-policy' ? 'active' : ''}`} to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/terms-of-service' ? 'active' : ''}`} to="/terms-of-service">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container my-5">
        {children}
      </main>
    </>
  );
}

export default Layout;
