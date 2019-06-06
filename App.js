import { createAppContainer, createStackNavigator } from "react-navigation";
import TodoList from "./components/TodoList";
import TabTwo from "./components/TabTwo";

const Home = createStackNavigator(
  {
    Home: TodoList
  },
  {
    defaultNavigationOptions: {
      title: "Todo List"
    }
  }
);

export default createAppContainer(Home);
