import { StyleSheet, Text, View } from "react-native";
import FlatList_Example1 from "./components/FlatList_Example1";
import FlatList_HeaderFooter from "./components/FlatList_HeaderFooter";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FlatList_Example1 /> */}
      <FlatList_HeaderFooter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
});
