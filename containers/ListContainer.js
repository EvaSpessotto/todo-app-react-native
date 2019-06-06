import React, { Component } from "react";
import { View, TextInput } from "react-native";
import TodoList from "../components/TodoList";
import { Input, Button } from "react-native-elements";

class ListContainer extends Component {
  state = {
    tasks: ["First task"],
    currentTask: ""
  };

  onChangeText = text => {
    this.setState({
      currentTask: text
    });
  };

  addTask = () => {
    this.setState({
      currentTask: "",
      tasks: [...this.state.tasks, this.state.currentTask]
    });
  };

  render() {
    return (
      <View>
        <Input
          placeholder="Add task"
          value={this.state.currentTask}
          onChangeText={this.onChangeText}
        />
        <Button title="Done" onPress={this.addTask} />
        <TodoList tasks={this.state.tasks} />
      </View>
    );
  }
}

export default ListContainer;
