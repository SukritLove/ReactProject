import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MyUseEffectApp = () => {
  return (
    <View>
      <Text>MyUseEffectApp</Text>
    </View>
  );
};

export default MyUseEffectApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifycontent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontweight: "bold",
    marginBottom: 20,
  },
  time: {
    fontSize: 18,
  },
});
