import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './style'

const DefineStyleSeparate = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title,styles.warning]}>Hello World</Text>
    </View>
  )
}

export default DefineStyleSeparate