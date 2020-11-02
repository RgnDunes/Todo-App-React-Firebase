import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "This is my first note.",
    "This is my second note.",
  ]);
  const [input, setInput] = useState("");
  const addItem = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  console.log(input);
  return (
    <div className="App">
      <h1>TODO APP ! </h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <button type="submit" onClick={addItem}>
          + Add Item
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
