import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idToken, setIdToken] = useState(null);
  const navigate = useNavigate();

  const initGoogleSignIn = useCallback(() => {
    window.google.accounts.id.initialize({
      client_id: '88973414867-h7amkrgb8s3onoopm4a3jaaddtjoefas.apps.googleusercontent.com', // Replace with your actual Client ID
      callback: (response) => {
        console.log('Google Sign-In Response:', response);
        if (response.credential) {
          const payload = parseJwt(response.credential);
          if (payload.exp * 1000 < Date.now()) {
            alert('Your session has expired. Please log in again.');
            setIsLoggedIn(false);
            setIdToken(null);
            return;
          }

          setIsLoggedIn(true);
          setIdToken(response.credential);
          navigate('/chat');
        } else {
          setIsLoggedIn(false);
        }
      },
    });
    window.google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      { theme: 'outline', size: 'large' }
    );
  }, [navigate]);

  const parseJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = initGoogleSignIn;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, [initGoogleSignIn]);

  return (
    <div className="text-center mt-5">
      <h2 style={{ color: '#0071ce' }}>Welcome to the Unofficial Walgreens Chatbot</h2>
      <p>This platform allows you to interact with a chatbot designed to assist you with various Walgreens-related inquiries and services. Please log in to continue.</p>
      <div id="google-signin-button" style={{ display: 'flex', justifyContent: 'center' }}></div>
    </div>
  );
}

export default Home;

