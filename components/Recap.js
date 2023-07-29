import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { React, useState } from "react";

const Recap = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const checkTextInput = () => {
    //Check for the password TextInput
    if (!email.trim() && !password.trim()) {
      alert("Please Enter password & Email");
      return;
    }
    if (!email.trim()) {
      alert("Please Enter password");
      return;
    }
    if (!password.trim()) {
      alert("Please Enter Email");
      return;
    }
    //Check for the Email TextInput
    AlertInfo();
  };
  const AlertInfo = () => {
    alert("Email : " + email + "\nPassword : " + password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        valueE={email}
        onChangeText={(valueE) => setEmail(valueE)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        valueP={password}
        onChangeText={(valueP) => setPass(valueP)}
      />

      <Text>{"\n"}</Text>
      <Button
        style={styles.submitButton}
        title="Submit"
        onPress={() => {
          checkTextInput();
        }}
      />
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
