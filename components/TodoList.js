import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, isChecked, handleCheck }) => {
  return tasks.map((task, index) => {
    return (
      <TodoItem
        key={index}
        task={task}
        isChecked={isChecked}
        handleCheck={handleCheck}
      />
    );
  });
};

export default TodoList;
