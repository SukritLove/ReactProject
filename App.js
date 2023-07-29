import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TouchableExample from './components/TouchableExample'

const App = () => {
  return (
    <View style= {styles.container}>
     <TouchableExample/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});