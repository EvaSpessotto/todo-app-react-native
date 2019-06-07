import React, { Component } from "react";
import { View, StyleSheet, ScrollView, ListView, Text } from "react-native";
import TodoList from "../components/TodoList";
import { Input, Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

class ListContainer extends Component {
  state = {
    tasks: [],
    currentTask: "",
    isChecked: false
  };

  onChangeText = text => {
    this.setState({
      currentTask: text
    });
  };

  addTask = () => {
    const newItem = {
      task: this.state.currentTask,
      isDone: false,
      id: this.state.tasks.length + 1
    };
    this.setState({
      currentTask: "",
      tasks: [...this.state.tasks, newItem]
    });
  };

  handleCheck = task => {
    const todo = this.state.tasks[task.id - 1];
    todo.isDone = !todo.isDone;
    const newTasks = [...this.state.tasks];
    this.setState({
      tasks: newTasks
    });
  };

  render() {
    return (
      <View>
        <View style={styles.footer}>
          <View style={{ flex: 2 }}>
            <Input
              placeholder="Add task"
              value={this.state.currentTask}
              onChangeText={this.onChangeText}
            />
          </View>
          <View style={{ flex: 0.3 }}>
            <Ionicons name="md-add-circle" size={40} onPress={this.addTask} />
          </View>
        </View>

        <View style={styles.listContainer}>
          <TodoList tasks={this.state.tasks} handleCheck={this.handleCheck} />
        </View>
      </View>
    );
  }
}

export default ListContainer;

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10
  },
  listContainer: {
    marginTop: 20
  }
});
