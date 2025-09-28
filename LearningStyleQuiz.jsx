// src/components/LearningStyleQuiz.jsx
import React, { useState } from "react";
import { determineLearningStyle } from "../services/api";

const LearningStyleQuiz = () => {
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAddAnswer = (answer) => {
    setAnswers([...answers, answer]);
  };

  const handleSubmit = async () => {
    if (answers.length === 0) return;
    const res = await determineLearningStyle(answers);
    setResult(res);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "20px" }}>
      <h2>Learning Style Quiz</h2>
      <input
        type="text"
        placeholder="Enter answer"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddAnswer(e.target.value);
            e.target.value = "";
          }
        }}
      />
      <button onClick={handleSubmit}>Submit Quiz</button>
      {result && (
        <div style={{ marginTop: "15px" }}>
          <p><strong>Style:</strong> {result.style}</p>
          <p><strong>Explanation:</strong> {result.explanation}</p>
          <p><strong>Suggestions:</strong> {result.suggestions}</p>
        </div>
      )}
      {answers.length > 0 && (
        <div>
          <strong>Answers entered:</strong>
          <ul>
            {answers.map((a, idx) => <li key={idx}>{a}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LearningStyleQuiz;
