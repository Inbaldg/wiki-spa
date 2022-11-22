import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ItemType } from "../types";

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: 800,
    overflow: "hidden",
    border: "1px solid blue",
    padding: "2px",
    display: "flex",
    flexDirection: "column"
  },
  image: { height: "150px", width: "250px" },
  title: {},
  header: { display: "flex" },
  content: {},
  readMoreButton: {}
});

export const MainContent = ({ item }: { item: ItemType }) => {
  return (
    <View style={{ display: "flex", flex: 2 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{item.name}</Text>
          <Image style={styles.image} source={{ uri: item.img }} />
        </View>
        <Text style={styles.content}>{item.description}</Text>
      </View>
      <Text style={styles.readMoreButton}>read more</Text>
    </View>
  );
};
