// src/components/MathSolver.jsx
import React, { useState } from "react";
import { getMathSolution } from "../services/api";

const MathSolver = () => {
  const [problem, setProblem] = useState("");
  const [steps, setSteps] = useState([]);

  const handleSolve = async () => {
    if (!problem) return;
    const solutionSteps = await getMathSolution(problem);
    setSteps(solutionSteps);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "20px" }}>
      <h2>Math Solver</h2>
      <input
        type="text"
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        placeholder="Enter math problem"
      />
      <button onClick={handleSolve}>Solve</button>
      {steps.length > 0 && (
        <div style={{ marginTop: "15px" }}>
          <strong>Steps:</strong>
          <ol>
            {steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default MathSolver;
