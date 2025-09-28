// src/pages/Dashboard.jsx
import React from "react";
import AIChat from "../components/AIChat";
import MathSolver from "../components/MathSolver";
import PdfToQuestions from "../pages/PdfToQuestions";
import LearningStyleQuiz from "../components/LearningStyleQuiz";
import "../main.css";

function Dashboard() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#1976d2" }}>
        Think Smart Dashboard
      </h1>

      <div className="dashboard-grid">
        <div className="card">
          <h2 className="card-title">AI Chat</h2>
          <AIChat />
        </div>

        <div className="card">
          <h2 className="card-title">Math Solver</h2>
          <MathSolver />
        </div>

        <div className="card">
          <h2 className="card-title">PDF to Questions</h2>
          <PdfToQuestions />
        </div>

        <div className="card">
          <h2 className="card-title">Learning Style Quiz</h2>
          <LearningStyleQuiz />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
