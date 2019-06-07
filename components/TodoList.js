import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, handleCheck }) => {
  return tasks.map((task, index) => {
    return <TodoItem key={index} task={task} handleCheck={handleCheck} />;
  });
};

export default TodoList;
