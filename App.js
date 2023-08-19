import { StyleSheet, Text, View } from "react-native";
import RandomUsersScreen from "./components/RandomUsersScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <RandomUsersScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
