import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button
          title="Press me"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
      <Seperator />
      <View>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the background color of the button.
        </Text>
        <Button
          title="Press me"
          color={"#FFBDAF"}
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
      <Seperator />
      <View>
        <Text style={styles.title}>
          All interaction for the component are disabled.
        </Text>
        <Button
          title="Press me"
          color={"#AFFFBE"}
          disabled
        />
      </View>
      <Seperator />
      <View>
        <Text style={styles.title}>
          This layout strategy lets the title define the width of the button.
        </Text>
        <View style = {styles.fixToText}>
          <Button
            title="Left button"
            color={"#AFD0FF"}
            onPress={() => Alert.alert("Turn Left")}
          />
        
          <Button
            title="Right button"
            color={"#AFD0FF"}
            onPress={() => Alert.alert("Trun Right")}
          />
        </View>
      </View>
    </SafeAreaView>
  );

};

const Seperator = () => <View style={styles.separator} />;

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
