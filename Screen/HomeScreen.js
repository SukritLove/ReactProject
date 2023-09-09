import { View, Text, Button } from "react-native";
import React from "react";

const HomeScreen = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Text>{"\n"}</Text>
      <Button
        title="Go To Details"
        onPress={() => {
          navigation.navigate("Details",{
          itemId : 1088,
          otherParam: 'Hello React'
          })
        }}
      />
    </View>
  );
};

export default HomeScreen;
