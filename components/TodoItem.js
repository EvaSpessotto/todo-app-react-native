import React from "react";
import { CheckBox } from "react-native-elements";

const TodoItem = ({ task, isChecked, handleCheck }) => {
  console.log(isChecked);
  return (
    <CheckBox
      title={task}
      checkedColor="green"
      checked={isChecked}
      onPress={handleCheck}
    />
  );
};

export default TodoItem;
