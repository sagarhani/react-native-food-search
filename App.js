import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import CameraScreen from "./src/screens/CameraScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
    Camera: CameraScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Food Search"
    }
  }
);

export default createAppContainer(navigator);
