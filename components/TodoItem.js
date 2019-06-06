import React from "react";
import { CheckBox } from "react-native-elements";

const TodoItem = ({ task }) => {
  return <CheckBox title={task} checkedColor="green" checked={false} />;
};

export default TodoItem;
