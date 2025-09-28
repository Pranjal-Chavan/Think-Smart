// src/components/AIChat.jsx
import React, { useState } from "react";
import { askAI } from "../services/api";

const AIChat = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleAskAI = async () => {
    if (!prompt) return;
    const answer = await askAI(prompt);
    setResponse(answer);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "20px" }}>
      <h2>Ask AI</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your question here..."
        rows={4}
        cols={50}
      />
      <br />
      <button onClick={handleAskAI}>Ask AI</button>
      {response && (
        <div style={{ marginTop: "15px" }}>
          <strong>AI Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default AIChat;
