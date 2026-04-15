import React, { useState } from "react";

function App1() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app-box">
      <h2>Open Source To-Do List</h2>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ background: "#fff", padding: "10px", border: "1px solid #ddd", marginBottom: "8px", display: "flex", justifyContent: "space-between" }}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)} style={{ background: "#e74c3c", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App1;