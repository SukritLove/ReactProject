
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './components/style';

export default function App() {
  return (
    <View style={styles.container}>
     <Text style={styles.row}>React</Text>
     <Text style={styles.row}>Native</Text>
    </View>
  );
}