import { View, Text } from "react-native";
import React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function FirstScreenStack() {
  return (
    <Stack.Navigator
      stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffffba",
        },
      }}
    >
      <Stack.Screen name="FirstPage" component={FirstPage} />
    </Stack.Navigator>
  );
}
function SecondScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SecondPage" component={SecondPage} />
      <Stack.Screen name="ThirdPage" component={ThirdPage} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffb3ba",
        },
        drawerStyle: {
          backgroundColor: "#ffdfba",
          width: 240,
        },
      }}
    >
      <Drawer.Screen
        name="FirstPage"
        component={FirstScreenStack}
        options={{ title: "First Drawer", drawerLabel: "First Page Option" }}
      />
      <Drawer.Screen
        name="SecondPage"
        component={SecondScreenStack}
        options={{ title: "Second Drawer", drawerLabel: "Second Page Option" }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
