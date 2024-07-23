import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <main className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-light p-3">
      <article className="card shadow-lg p-4 w-100" style={{ maxWidth: '600px' }}>
        <div className="card-body text-center">
          <header>
            <h1 className="text-primary mb-4 h3">About the Unofficial Walgreens Chatbot</h1>
          </header>
          <section>
            <p className="text-muted mb-3">
              Hi, I'm Aaron Melton, the creator of the Unofficial Walgreens Chatbot. 
              As a former Senior Natural Language Understanding Analyst at Walgreens, I was 
              dedicated to improving our chatbot's machine learning model. However, 
              due to contract constraints and leadership issues, I found it challenging 
              to make the necessary improvements.
            </p>
            <p className="text-muted mb-3">
              I eventually resigned from Walgreens because I was frustrated with the inaccuracies in reporting a systematic problem. 
              Feeling embarrassed and constrained by the limitations, I decided to create a new chatbot as a part of my job portfolio. 
              This project allowed me to implement the improvements I envisioned and showcase my skills and dedication 
              to enhancing user experiences through advanced machine learning techniques.
            </p>
            <p className="text-muted mb-3">
              This chatbot has a React front end and Langchain backend. It uses Retrieval Augmented Generation (RAG) to look up information and prevent hallucinations. In the future, I may add functions like finding the nearest store, deals/coupons, and other great ideas people suggest. It was designed to be a prototype and scalable.
            </p>
            <p className="text-muted mb-3">
              Thank you for trying out the Unofficial Walgreens Chatbot. I hope it 
              provides you with the assistance you need and demonstrates the potential 
              of what a well-tuned chatbot can achieve.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

export default About;