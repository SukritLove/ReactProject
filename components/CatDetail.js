//-------------------Example 1-------------------
// import { View, Text } from "react-native";
// import React from "react";

// const CatDetail = () => {
//   const name = "Maru";

//   return <Text>Hello, I am {name}!</Text>;
// };

// export default CatDetail;
//-----------------------------------------------

//-------------------Example 2-------------------
import { View, Text } from "react-native";
import React from "react";

const getFullname = (firstName, middleName, lastName) => {
  return firstName + " " + middleName + " " + lastName;
};

const CatDetail = () => {
  const name = "Maru";

  return <Text>Hello, I am {getFullname("Sukrit", "Love", "Rerk-u-cote")}!</Text>;
};

export default CatDetail;
//-----------------------------------------------
