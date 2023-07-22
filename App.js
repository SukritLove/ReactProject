
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Cat from './components/Cat'
// import CatDetail from './components/CatDetail';
// import ViewBoxesWithColorAndText from './components/ViewBoxesWithColorAndText';
// import DisplayandImage from './components/DisplayandImage';
// import LotsOfGreeting from './components/LotsOfGreeting';
// import CustomText from './components/CustomText';
// import ReHook from './components/ReHook';
import Counter from './components/Counter';
import IncrementCounter from './components/IncrementCounter';
import MyTextInput from './components/MyTextInput';
import Form from './components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Counter/>
      <IncrementCounter/> */}
      {/* <MyTextInput/> */}
      <Form/>
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