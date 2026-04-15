import React, { useState } from "react";

function App2() {
  // Hardcoded array to avoid needing an external API fetch
  const quotes = [
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
    { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" }
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="app-box" style={{ textAlign: "center" }}>
      <h2>Random Quote Generator</h2>
      <div style={{ background: "#fff", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", fontStyle: "italic", marginBottom: "20px" }}>
        <p>"{quote.text}"</p>
        <p style={{ fontWeight: "bold", marginTop: "10px" }}>- {quote.author}</p>
      </div>
      <button onClick={generateRandomQuote} style={{ background: "#2ecc71", color: "white", padding: "10px 20px", border: "none", fontSize: "16px", cursor: "pointer" }}>
        New Quote
      </button>
    </div>
  );
}

export default App2;