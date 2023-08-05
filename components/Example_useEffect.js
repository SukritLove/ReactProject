import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Example_useEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //Fetch Data from API using axios
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // Handle sucessful response
        setData(response.data);
      })
      .catch((error) => {
        // Handle Error
        console.error('Error fetcing data:', error);
      });
  }, []); // The empty deoendency array ensures this effect runs only once when the component mounts.

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post from API:</Text>
      {
      data.map((post) => (
        <View key={post.id} style={styles.post}>
          <Text style={styles.postTitle} > {post.title} </Text>
          <Text > {post.body} </Text>
        </View>
      ))
      }
    </View>
  );
};

export default Example_useEffect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  post: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
