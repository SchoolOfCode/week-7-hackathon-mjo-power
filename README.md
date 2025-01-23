# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
import React, { useState } from "react";
<!-- function for form -->
<!-- export function QuestionAnswerForm() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [entries, setEntries] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission
    if (question && answer) {
      setEntries([...entries, { question, answer }]);
      setQuestion(""); // Clear the input fields
      setAnswer("");
    }
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <div>
          <label>
            Question:
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter your question"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Answer:
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter your answer"
              required
            />
          </label>
        </div>
        <button type="submit">Add</button>
      </form>

      {/* Display the list of entries */}
      <div>
        <h3>Entries:</h3>
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>
              <strong>Q:</strong> {entry.question} <br />
              <strong>A:</strong> {entry.answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} -->
