import React, { useState } from 'react';
import App1 from "./App1";
import App2 from "./App2";
import "./App.css";

function App() {
  const [menu, setMenu] = useState("app1");

  return (
    <div id="spa-container">
      <h1>React Single Page Application</h1>
      <nav className="spa-nav">
        <button 
          className={menu === "app1" ? "active" : ""} 
          onClick={() => setMenu("app1")}
        >
          To-Do List
        </button>
        <button 
          className={menu === "app2" ? "active" : ""} 
          onClick={() => setMenu("app2")}
        >
          Quote Generator
        </button>
      </nav>
      
      <div className="spa-content">
        {menu === "app1" && <App1 />}
        {menu === "app2" && <App2 />}
      </div>
    </div>
  );
}

export default App;