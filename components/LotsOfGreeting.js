import { View, Text } from 'react-native'
import React from 'react'

const Greeting = (props) => {
    return(<View>
        <Text>Hello {props.name}</Text>
        </View>);
}

const LotsOfGreeting = () => {
  return (
    <View style = {{alignItems:'center', top:50}}>
      <Greeting name = "Love"/>
      <Greeting name = "John"/>
      <Greeting name = "Alice"/>
    </View>
  )
}

export default LotsOfGreeting