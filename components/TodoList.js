import React, { useState } from "react";
import { View, Text } from "react-native";
import { CheckBox } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

class TodoList extends React.Component {
  state = {
    isChecked: false
  };

  handleCheck() {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <CheckBox
          title="Click Here"
          checkedColor="green"
          checked={this.state.isChecked}
          onPress={() => this.handleCheck()}
        />
      </View>
    );
  }
}

export default TodoList;

const styles = {
  container: {
    marginTop: 10
  }
};
