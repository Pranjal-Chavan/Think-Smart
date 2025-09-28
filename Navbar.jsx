// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">Think Smart</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/math-solver" className={({ isActive }) => isActive ? 'active' : ''}>Math Solver</NavLink>
        <NavLink to="/pdf-to-questions" className={({ isActive }) => isActive ? 'active' : ''}>PDF → Questions</NavLink>
        <NavLink to="/learning-style-quiz" className={({ isActive }) => isActive ? 'active' : ''}>Quiz</NavLink>
        
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;