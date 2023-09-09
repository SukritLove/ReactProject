import { Text, View, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./Screen/IndexScreen";
import CreatePostScreen from "./Screen/CreatePostScreen";
import HomeScreen from "./Screen/HomeScreen";
import DetailsScreen from "./Screen/DetailsScreen";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode = 'model'
        screenOptions={{
          headerStyle: {
            backgroundColor: "#008b8b",
          },
          headerTintColor: "#ffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/* <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen> */}
        <Stack.Screen name='Index' component={IndexScreen} options={{title: 'Main Screen'}}></Stack.Screen>
        <Stack.Screen name='CreatePost' component={CreatePostScreen}></Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
