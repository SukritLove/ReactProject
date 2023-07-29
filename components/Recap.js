import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableHighlight,
} from "react-native";
import { React, useState } from "react";

const Recap = () => {
  const [email, setInputEmail] = useState("");
  const [password, setInputPass] = useState("");

  const checkTextInput = () => {
    //Check for the password TextInput
    if (!email.trim() && !password.trim()) {
      alert("Please Enter Email & Password");
      return;
    }
    if (!email.trim()) {
      alert("Please Enter Email");
      return;
    }
    if (!password.trim()) {
      alert("Please Enter Password");
      return;
    }
    AlertInfo();
  };

  const AlertInfo = () => {
    alert("Email : " + email + "\nPassword : " + password);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(value) => setInputEmail(value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(value) => setInputPass(value)}
      />
      <TouchableHighlight 
      style = {styles.submitButton}
      underlayColor={"#8B9B65"}
      onPress={() => {checkTextInput();}}
      >
      <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableHighlight>
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
    width: 200,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  submitButton: {
    alignItems:'center',
    backgroundColor: "#B2C67F",
    padding: 10,
    margin: 15,
    height: 40,
    
  },
  submitButtonText: {
    color: "white",
  },
});
