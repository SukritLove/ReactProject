import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Cat from "./components/Cat";
import CatDetail from "./components/CatDetail";

export default function App() {
  return (
    <View>
      <Cat />
      <CatDetail />
    </View>
  );
  }