import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { React, useState } from "react";

const Form = () => {
  const [name, setName] = useState("Taylor");
  const [age, setAge] = useState(42);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Input name"
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <Text>{"\n"}</Text>
      <Button
        title="Increment Age"
        onPress={() => {
          setAge(age + 1);
        }}
      />
      <Text>
        {"\n"}
        Hello,{name}. You are {age}.{"\n"}
      </Text>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    justifyContent: "center"
  },
  textInputStyle: {
    width: 200,
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
