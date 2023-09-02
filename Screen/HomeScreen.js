import { View, Text, Button } from "react-native";
import DetailsScreen from "./DetailsScreen";
import React from "react";

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go To Detail"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
