import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data()));
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addItem = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
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
