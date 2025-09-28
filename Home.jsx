// src/pages/Home.jsx
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AIChat from "../components/AIChat";

function Home() {
  return (
    <div className="home-container">
      <AIChat />
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Think Smart</h1>
        <p>Empower your learning with intelligent tools, quizzes, and personalized insights.</p>
        <Link to="/pdf-to-questions" className="cta-button">Start Learning</Link>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Modules</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>PDF to Questions</h3>
            <p>Upload your notes or PDFs and instantly get interactive questions.</p>
          </div>
          <div className="card">
            <h3>Math Solver</h3>
            <p>Upload math problems and get step-by-step solutions with explanations.</p>
          </div>
          <div className="card">
            <h3>Learning Style Quiz</h3>
            <p>Discover your unique learning style and receive personalized study tips.</p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats">
        <h2>Our Impact</h2>
        <div className="stats-grid">
          <div className="stat-box">
            <h3>5000+</h3>
            <p>Questions Generated</p>
          </div>
          <div className="stat-box">
            <h3>2000+</h3>
            <p>Problems Solved</p>
          </div>
          <div className="stat-box">
            <h3>1000+</h3>
            <p>Active Learners</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Students Say</h2>
        <div className="testimonial-cards">
          <div className="card">
            <p>"Think Smart transformed my study routine! I love the PDF to Questions tool."</p>
            <h4>- Priya S.</h4>
          </div>
          <div className="card">
            <p>"The math solver helped me understand complex problems step by step."</p>
            <h4>- Rahul K.</h4>
          </div>
          <div className="card">
            <p>"The learning style quiz gave me personalized tips I actually use."</p>
            <h4>- Ananya P.</h4>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
