// src/pages/SavedQuestions.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SavedQuestions.css'; // Optional CSS

function SavedQuestions() {
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch saved questions from backend
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/saved-questions');
        setQuestions(response.data.questions); // Expected: { questions: [...] }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  // Handle export as text file
  const handleExport = () => {
    const element = document.createElement('a');
    const fileBlob = new Blob([questions.map(q => q.text).join('\n\n')], { type: 'text/plain' });
    element.href = URL.createObjectURL(fileBlob);
    element.download = 'saved_questions.txt';
    document.body.appendChild(element);
    element.click();
  };

  // Filtered questions
  const filteredQuestions = questions.filter(q =>
    q.text.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <p>Loading saved questions...</p>;

  return (
    <div className="saved-container">
      <h1>Saved Questions</h1>

      <div className="saved-controls">
        <input
          type="text"
          placeholder="Search questions..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button onClick={handleExport}>Export All</button>
      </div>

      <table className="questions-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredQuestions.map((q, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{q.text}</td>
              <td>{q.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SavedQuestions;
