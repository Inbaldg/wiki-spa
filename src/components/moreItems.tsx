import React from "react";
import { ItemType } from "../types";
import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: 400,
    overflow: "scroll",
    display: "flex",
    flexDirection: "column",
    flex: 1
  },
  itemContainer: {
    height: 100,
    width: 350,
    border: "1px solid red",
    padding: "2px",
    display: "flex",
    flexDirection: "row"
  },
  texts: { display: "flex", flex: 2, padding: "5px" },
  image: { display: "flex", flex: 1 },
  title: {},
  content: { display: "flex", flex: 2, marginTop: "-10px" },
  readMoreButton: {}
});

const Item = ({ item }: { item: ItemType }) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: item.img }} />
      <View style={styles.texts}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.content} numberOfLines={5}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export const MoreItems = ({ items }: { items: ItemType[] }) => {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </View>
  );
};
