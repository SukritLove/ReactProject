import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomUsersScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      //   const response = await fetch("https://randomuser.me/api/?results=15");
      //   const data = await response.json();
      //   setUsers(data.results);
      const response = await axios.get("https://randomuser.me/api/?results=15");
      setUsers(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchUsers;
  }, []);

  return (
    <View style={{ flex: 1, marginLeft: 10, justifyContent: "center" }}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text>{`${item.name.first} ${item.name.last}`}</Text>
            <Text>{item.email}</Text>
            keyExtractor={(index) => index.toString()};
          </View>
        )}
      />
    </View>
  );
};

export default RandomUsersScreen;
