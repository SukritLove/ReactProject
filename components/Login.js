import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, {useState } from "react";

const Login = () => {
  const [name, setTextInputName] = useState("");
  const [email, setTextInputEmail] = useState("");

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!name.trim() && !email.trim()){
        alert("Please Enter Name & Email");
      return;
    }
    if (!name.trim()) {
      alert("Please Enter Name");
      return;
    }
    if (!email.trim()) {
      alert("Please Enter Email");
      return;
    }
    //Check for the Email TextInput

    alert("Check Sucessfully");

    //Do whatever you want
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter Name"
        value={name}
        onChangeText={(value) => setTextInputName(value)}
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter Email"
        value={email}
        onChangeText={(value) => setTextInputEmail(value)}
      />
      <Text>{"\n"}</Text>
      <Button
        title="Submit"
        onPress={() => {
          checkTextInput();
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: 200,
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
