import React from "react";
import {
  ListItem,
  List,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import "./Todo.css";

function Todo(props) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo} secondary="Deadline" />
      </ListItem>
    </List>
  );
}

export default Todo;
