import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

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
  // #cfe8fc
  // console.log(todo);
  return (
    <div className="Overall">
      <Navbar />
      <Container maxWidth="md">
        <Typography component="div" style={{ backgroundColor: "#E6E6FA" }}>
          <div className="App">
            <hr />
            <h1>- Taskmaster -</h1>
            <hr />
            <br />
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

            <br />
            <hr />
            <br />
            <ul>
              {todos.map((todo) => (
                <Todo todo={todo} />
              ))}
            </ul>
          </div>
        </Typography>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
