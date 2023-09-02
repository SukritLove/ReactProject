import { StyleSheet, Text, View } from "react-native";
import FlastListAPI from "./components/FlatListAPI";
import News from "./components/News";
import ProductScreen from "./components/ProductScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FlastListAPI/>
      <News/> */}
<ProductScreen/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
