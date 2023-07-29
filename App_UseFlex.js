import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./components/style";

export default function App() {
  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <View style={{ flex: 1, backgroundColor: 'red' }} />
      <View style={{ flex: 1, backgroundColor: 'yellow' }} />
      <View style={{ flex: 1, backgroundColor: 'green' }} />
    </View>
  );
}

// export default function App() {
//   return (
//     <View style={[styles.container, { flexDirection: "column" }]}>
//       <View style={{ flex: 1, backgroundColor: 'red' }} />
//       <View style={{ flex: 2, backgroundColor: 'yellow' }} />
//       <View style={{ flex: 3, backgroundColor: 'green' }} />
//     </View>
//   );
// }
