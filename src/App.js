import React, { useState } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";

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
        <FormControl>
          <InputLabel>Write a Todo Item !</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addItem}
          variant="contained"
          color="primary"
        >
          + Add Item
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
