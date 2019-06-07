import React from "react";
import { CheckBox } from "react-native-elements";

const TodoItem = ({ task, handleCheck }) => {
  return (
    <CheckBox
      title={task.task}
      checkedColor="green"
      checked={task.isDone}
      onPress={() => handleCheck(task)}
    />
  );
};

export default TodoItem;
