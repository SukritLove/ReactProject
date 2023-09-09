import { View, Text, Button } from "react-native";
import React from "react";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>{"\n"}</Text>
        <Button
            title="Go to details...again"
            onPress={() => navigation.push("Details")}
        />
      <Text>{"\n"}</Text>
        <Button 
            title="Go to Home" 
            onPress={() => navigation.push("Home")} />
      <Text>{"\n"}</Text>
        <Button 
            title="Go Back" 
            onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailsScreen;
