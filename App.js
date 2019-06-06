import { createAppContainer, createStackNavigator } from "react-navigation";
import ListContainer from "./containers/ListContainer";

const Home = createStackNavigator(
  {
    Home: ListContainer
  },
  {
    defaultNavigationOptions: {
      title: "Todo List"
    }
  }
);

export default createAppContainer(Home);
