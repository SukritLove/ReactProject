import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const IndexScreen = ({ navigation, route }) => {
  //! Post Updated, Do something with 'route.params.post
  //! For Example, sent the post to the server

//   const { post } = route.params;
//   React.useEffect(() => {
//     if (route.params?.post) {
        
//     }
//   }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Create Post"
        onPress={() => {
          navigation.navigate({
            name: "CreatePost",
          });
        }}
      />

      <Text>
        {"\n"}Post: {route.params?.post}
      </Text>
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
