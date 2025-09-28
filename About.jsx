// src/pages/About.jsx
import React from 'react';
import './About.css'; // Optional CSS

function About() {
  return (
    <div className="about-container">
      <h1>About Think Smart</h1>
      <p>
        <strong>Think Smart</strong> is an intelligent learning platform designed to empower students by leveraging deep learning and AI technologies. 
        It helps students generate quiz questions from PDFs, solve handwritten math problems, and discover their learning style.
      </p>

      <h2>Technologies Used</h2>
      <ul>
        <li>Frontend: React.js, React Router, Chart.js</li>
        <li>Backend: Python, Flask/FastAPI, REST APIs</li>
        <li>Database: MongoDB</li>
        <li>Machine Learning: NLP for question generation, OCR for math recognition, learning style analysis</li>
        <li>Others: Axios for API calls, File upload handling, Charts & visualizations</li>
      </ul>

      <h2>Contributors</h2>
      <ul>
        <li>Pranjal Chavan – Project Lead & Frontend Developer</li>
        <li>Richa Jadyal  – Backend & ML Implementation</li>
        <li>Tanvi Dagade  – UI/UX & Testing</li>
        <li>Tanvi Gadage  – UI/UX & Testing</li>
        {/* Add more contributors as needed */}
      </ul>
    </div>
  );
}

export default About;
