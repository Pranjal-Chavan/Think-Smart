// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SavedQuestions from "./pages/SavedQuestions";
import UploadNotes from "./components/UploadNotes";
import MathSolver from "./components/MathSolver";
import PdfToQuestions from "./pages/PdfToQuestions";
import LearningStyleQuiz from "./components/LearningStyleQuiz";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { isAuthenticated } from "./services/auth";

function App() {
  return (
    <Router>
      {isAuthenticated() && <Navbar />}
      <div className="app-container">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={!isAuthenticated() ? <Login /> : <Navigate to="/dashboard" />} />
          <Route path="/signup" element={!isAuthenticated() ? <SignUp /> : <Navigate to="/dashboard" />} />

          {/* Protected Routes */}
          <Route path="/" element={isAuthenticated() ? <Home /> : <Navigate to="/login" />} />
          <Route path="/dashboard" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/about" element={isAuthenticated() ? <About /> : <Navigate to="/login" />} />
          <Route path="/contact" element={isAuthenticated() ? <Contact /> : <Navigate to="/login" />} />
          <Route path="/saved" element={isAuthenticated() ? <SavedQuestions /> : <Navigate to="/login" />} />
          <Route path="/upload" element={isAuthenticated() ? <UploadNotes /> : <Navigate to="/login" />} />
          <Route path="/math-solver" element={isAuthenticated() ? <MathSolver /> : <Navigate to="/login" />} />
          <Route path="/pdf-to-questions" element={isAuthenticated() ? <PdfToQuestions /> : <Navigate to="/login" />} />
          <Route path="/learning-style-quiz" element={isAuthenticated() ? <LearningStyleQuiz /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
