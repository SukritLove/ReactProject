import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const SecondPage = ({navigation}) => {
    return (
        <View style={styles.container}>
          <Text style={styles.textStyle}>This is Second Page of the App</Text>
          <Text>{"\n"}</Text>
          <Button
            title="Go Back"
            onPress={() => navigation.goBack()}
          />
          <Button
            title="Go To Secondpage... again"
            onPress={() => navigation.push("SecondPage")}
          />
          <Button
            title="Go To First Page"
            onPress={() => navigation.navigate("FirstPage")}
          />
          <Button
            title="Go To Third Page"
            onPress={() => navigation.navigate("ThirdPage")}
          />
        </View>
      );
};
export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 16,
  },
});
