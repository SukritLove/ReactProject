import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { React, useState } from "react";

const IncrementCounter = () => {
  const [age, setAge] = useState(23);
  const increment = (num) => {
    switch(num){
        case(1):
            setAge((a) => a + 1);
            break
        case(3):
            setAge((a) => a+3);
            break
    }
  };

  return (
    <View style={styles.container}>
      <Text 
        style = {{fontSize: 24, fontWeight: 'bold'}}>
        Your age: {age}
        {"\n\n"}
      </Text>

      <Button 
      title="+3" 
      onPress={() => increment(3)} />

      <Text>{"\n\n"}</Text>

      <Button 
      title="+1" 
      onPress={() => increment(1)} />
    </View>
  );
};

export default IncrementCounter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    justifyContent: "center",
  },
});
