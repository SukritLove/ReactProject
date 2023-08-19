import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React, { useState } from "react";

const dummyArray = [
  { id: 1, title: "Button" },
  { id: 2, title: "Card" },
  { id: 3, title: "Input" },
  { id: 4, title: "Avatar" },
  { id: 5, title: "CheckBox" },
  { id: 6, title: "Header" },
  { id: 7, title: "Icon" },
  { id: 8, title: "Lists" },
  { id: 9, title: "Rating" },
  { id: 10, title: "Pricing" },
  { id: 11, title: "Avatar" },
  { id: 12, title: "CheckBox" },
  { id: 13, title: "Header" },
  { id: 14, title: "Icon" },
  { id: 15, title: "Lists" },
];

const EmptyListMessge = ({ item }) => {
  return (
    <Text style={styles.emptyListStyle} onPress={() => getItem(item)}>
      No data Found
    </Text>
  );
};
const FlatList_HeaderFooter = () => {
  const [listItems, setListItems] = useState(dummyArray);
  const ItemView = ({ item }) => {
    return (
      <View style={styles.textStyle}>
        <Text style={styles.item} onPress={() => getItem(item)}>
          {item.id}{'.'} {item.title}
        </Text>
      </View>
    );
  };

  const ItemSeperatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#30415c",
        }}
      />
    );
  };

  const ListHeader = () => {
    return (
      <View style={styles.headerFooterStyle}>
        <Text style={styles.textStyle}>React Native Component</Text>
      </View>
    );
  };
  const ListFooter = () => {
    return (
      <View style={styles.headerFooterStyle}>
        <Text style={styles.textStyle}>Thai-Nichi Institute of Technology</Text>
      </View>
    );
  };

  const getItem = (item) => {
    alert("Id: " + item.id + " Title: " + item.title);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View >
        <ListHeader/>
        <FlatList
          data={listItems}
          ItemSeparatorComponent={ItemSeperatorView}
          renderItem={ItemView}
          ListEmptyComponent={EmptyListMessge}
        />
        <ListFooter/>
      </View>
    </SafeAreaView>
  );
};

export default FlatList_HeaderFooter;

const styles = StyleSheet.create({
  
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: "center",
  },
  itemStyle: {
    padding: 10,
  },
  headerFooterStyle: {
    width: "100%",
    height: 45,
    backgroundColor: "#606070",
  },
  textStyle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    padding: 7,
  },
});
