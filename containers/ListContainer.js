import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import TodoList from "../components/TodoList";
import { Input, Button, CheckBox } from "react-native-elements";

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
    this.setState({
      currentTask: "",
      tasks: [...this.state.tasks, this.state.currentTask]
    });
  };

  handleCheck = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  render() {
    console.log(this.state.isChecked);
    return (
      <View>
        <View style={styles.submitContainer}>
          <View style={{ flex: 1 }}>
            <Input
              placeholder="Add task"
              value={this.state.currentTask}
              onChangeText={this.onChangeText}
            />
          </View>
          <View>
            <Button title="Done" onPress={this.addTask} />
          </View>
        </View>
        <View style={styles.listContainer}>
          <TodoList
            tasks={this.state.tasks}
            isChecked={this.state.isChecked}
            handleCheck={this.handleCheck}
          />
        </View>
        {/* <CheckBox
          title={"oui"}
          checkedColor="green"
          checked={this.state.isChecked}
          onPress={() => this.setState({ isChecked: !this.state.isChecked })}
        /> */}
      </View>
    );
  }
}

export default ListContainer;

const styles = StyleSheet.create({
  submitContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10
  },
  listContainer: {
    marginTop: 20
  }
});
