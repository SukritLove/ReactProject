import { View, Text } from 'react-native'
import React from 'react'

const MyCustomTextWith = ({fName1,lname1}) => {
  return (
   <Text>Your First Name is {fName1} and Last Name is {lname1}</Text>);

 }

const CustomText = () => {
  return (
  <View>
      <MyCustomTextWith 
      fName1={"Sukrit"}
      lname1={"Rerk-u-cote"}/>
      <MyCustomTextWith
      fName1={"Soravich"}
      lname1={"Sermsub"}/>
  </View> );
}

export default CustomText