import { StyleSheet, Text, View, Image } from 'react-native'

import React from 'react'

const DisplayandImage = () => {
  return (
    <View style = {styles.container}>
      <Image
      source={require('../assets/react_logo.png')} 
      style = {styles.tinyLogo}
      />
      <Image
      source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} 
      style = {styles.tinyLogo}
      />
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },

})


export default DisplayandImage;
