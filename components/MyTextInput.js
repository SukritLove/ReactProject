import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { React, useState } from "react";

const MyTextInput = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter text"
        style={styles.textInputStyle}
        value={text}
        onChangeText={(value) => setText(value)}
      />

      <Text>
        {"\n"}You typed: {text}
        {"\n"}
      </Text>

      <Button title="Reset" onPress={() => setText("Hello")} />
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    justifyContent: 'center',
  },
  textInputStyle: {
    width: 100,
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
