import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectFlatList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        //Handle successful response
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error)=>{
        console.error('Error Fetching Data:', error)
        setIsLoading(true);
      })
  }, []); //The empty dependency array ensures this effect runs only once when the component mounts.

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator animating size="large" color="#0000ff" />
        <Text></Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post from API using FlatList:</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.postTitle}> {item.title} </Text>
            <Text> {item.body} </Text>
          </View>
        )}
      />
    </View>
  );
};

export default UseEffectFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  post: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
