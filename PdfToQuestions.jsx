// src/components/PdfToQuestions.jsx
import React, { useState } from 'react';
import './PdfToQuestions.css'; // Optional CSS

function PdfToQuestions() {
  const [file, setFile] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setQuestions([]);
    setError('');
  };

  const handleGenerate = async () => {
    if (!file) {
      setError('Please upload a PDF file.');
      return;
    }

    setLoading(true);
    setError('');
    setQuestions([]);

    const formData = new FormData();
    formData.append('pdf_file', file);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/pdf-to-questions', {
        method: 'POST',
        headers: {
          'x-api-key': process.env.REACT_APP_AI_API_KEY || ''
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setQuestions(data.questions || []);
    } catch (err) {
      console.error(err);
      setError('Failed to generate questions. Please check your API key and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pdf-questions-container">
      <h2>PDF to Questions</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Questions'}
      </button>

      {error && <p className="error">{error}</p>}

      {questions.length > 0 && (
        <div className="questions-list">
          <h3>Generated Questions:</h3>
          <ol>
            {questions.map((q, idx) => (
              <li key={idx}>{q}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default PdfToQuestions;