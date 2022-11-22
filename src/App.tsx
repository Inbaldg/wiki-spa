import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import { HomeScreen } from "./components/homeScreen";

//import { createNativeStackNavigator } from "@react-navigation/native-stack";

//const Stack = createNativeStackNavigator();

class App extends Component {
  //get mainContent data
  // get moreItemsData
  render() {
    return (
      <>
        <NavigationContainer>
          {/*  <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{ itemId: 0 }}

          /> 
        </Stack.Navigator>{" "}*/}
        </NavigationContainer>
        <HomeScreen id={1} />
      </>
    );
  }
}

export default App;
