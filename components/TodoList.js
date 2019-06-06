import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks }) => {
  return tasks.map((task, index) => {
    return <TodoItem key={index} task={task} />;
  });
};

export default TodoList;
