import React, { useState } from "react";
import {
  ListItem,
  List,
  Button,
  ListItemText,
  ListItemAvatar,
  Input,
  Modal,
} from "@material-ui/core";
import "./Todo.css";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <h1>Modal</h1>
          <Input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={updateTodo}>
            Update Todo
          </Button>
        </div>
      </Modal>
      <List className="todo_list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="Deadline ⏰" />
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => setOpen(true)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={(event) =>
              db.collection("todos").doc(props.todo.id).delete()
            }
          >
            <DeleteForeverIcon />
            Delete
          </Button>
        </ListItem>
      </List>
    </>
  );
}

export default Todo;
