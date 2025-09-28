// frontend/src/services/api.js
import axios from "axios";


// FastAPI backend URL
const API_BASE = "http://127.0.0.1:8000/api";

// PDF to Questions
export const getPdfQuestions = async (textInput) => {
  try {
    const res = await axios.post(`${API_BASE}/pdf-to-questions`, { text: textInput });
    return res.data.questions || [];
  } catch (err) {
    console.error("Error fetching PDF questions:", err);
    return [];
  }
};

// Math Solver
export const getMathSolution = async (problemInput) => {
  try {
    const res = await axios.post(`${API_BASE}/math-solver`, { problem: problemInput });
    return res.data.steps || [];
  } catch (err) {
    console.error("Error solving math:", err);
    return [];
  }
};

// Learning Style Quiz
export const determineLearningStyle = async (quizAnswers) => {
  try {
    const res = await axios.post(`${API_BASE}/learning-style`, { answers: quizAnswers });
    return res.data;
  } catch (err) {
    console.error("Error determining learning style:", err);
    return { style: "Unknown", explanation: "Something went wrong.", suggestions: "" };
  }
};

// General AI Q&A
export const askAI = async (prompt) => {
  try {
    const res = await axios.post(`${API_BASE}/chat`, { prompt });
    return res.data.answer || "No response from AI.";
  } catch (err) {
    console.error("Error asking AI:", err);
    return "Error connecting to AI.";
  }
};
