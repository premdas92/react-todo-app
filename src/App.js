import React from 'react';
import './App.css';
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="black-patch">
          <span>Todo App</span>
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
