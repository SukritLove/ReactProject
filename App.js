
import { StyleSheet, Text, View } from 'react-native';
import Example_useEffect from './components/Example_useEffect';
import UseEffectFlatList from './components/UseEffectFlatList';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Example_useEffect/> */}
      <UseEffectFlatList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});