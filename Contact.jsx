// src/pages/Contact.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'; // Optional CSS

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/feedback', formData);
      if (response.status === 200) {
        setStatus('Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error(error);
      setStatus('Error sending message. Please try again later.');
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact / Feedback</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <button type="submit">Send Message</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
}

export default Contact;
