import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, {useState } from "react";

const Recap = () => {
  const [email, setInputEmail] = useState('')
  const [password, setInputPass] = useState('')

  const checkTextInput = (email, password) => {
    //Check for the password TextInput
    if (!email.trim() && !password.trim()){
      alert("Please Enter Name & Email");
    return;
  }
  if (!email.trim()) {
    alert("Please Enter Name");
    return;
  }
  if (!password.trim()) {
    alert("Please Enter Email");
    return;
  }
  AlertInfo()
  };
  const AlertInfo = () => {
    alert("Email : " + email + "\nPassword : " + password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style = {styles.input}
        placeholder = "Email"
        value={email}
        onTextInput={(value) => setInputEmail(value)}
      />
      <TextInput
        style = {styles.input}
        placeholder="Password"
        value={password}
        onTextInput={(value) => setInputPass(value)}
        />
      <Text>{"\n"}</Text>
      <Button>
        style = {styles.submitButton}

      </Button>
    </View>
  );
};

export default Recap;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    width:200,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
