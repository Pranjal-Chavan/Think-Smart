// src/components/UploadNotes.jsx
import React, { useState } from "react";
import "./UploadNotes.css"; // optional styling

function UploadNotes() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResponse(null);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a PDF or image file.");
      return;
    }

    setLoading(true);
    setError("");
    setResponse(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/pdf-to-questions", {
        method: "POST",
        headers: {
          "x-api-key": process.env.REACT_APP_AI_API_KEY,
        },
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      console.error(err);
      setError("Failed to process the file. Please check your API key or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-notes-container">
      <h2>Upload Notes (PDF / Image)</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf,image/*" onChange={handleFileChange} />
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Generate Questions"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {response && (
        <div className="results">
          <h3>Extracted Text</h3>
          <pre>{response.extracted_text}</pre>

          {response.questions && response.questions.length > 0 && (
            <>
              <h3>Generated Questions</h3>
              <ol>
                {response.questions.map((q, idx) => (
                  <li key={idx}>{q}</li>
                ))}
              </ol>
            </>
          )}

          {response.analysis && (
            <>
              <h3>Analysis</h3>
              <p><strong>Summary:</strong> {response.analysis.summary}</p>
              <p><strong>Word Count:</strong> {response.analysis.word_count}</p>
              <p><strong>Difficulty:</strong> {response.analysis.difficulty_level}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default UploadNotes;
