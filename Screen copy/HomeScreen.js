import { View, Text, Button } from "react-native";
import React from "react";

const HomeScreen = ({route,navigation}) => {

  const { itemId } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Text>itemId : [{itemId}]</Text>
      <Text>{'\n'}</Text>
      <Button
        title="Update Param"
        onPress={() => navigation.setParams({
            itemId: Math.floor(Math.random() * 100)
        })
      }
      />
      <Text>{'\n'}</Text>
      <Button
        title="Go To Details"
        onPress={() => navigation.navigate("Details")}
      />

    </View>
  );
};

export default HomeScreen;
