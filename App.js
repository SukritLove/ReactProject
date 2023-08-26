import { StyleSheet, Text, View } from "react-native";
import FlastListAPI from "./components/FlatListAPI";
import News from "./components/News";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FlastListAPI/> */}
      <News/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,
    // alignItems: "center",
    justifyContent: "center",
  },
});
