import React from "react";
import { StyleSheet, View } from "react-native";
import { dataObj } from "../data/data";
import { ItemType } from "../types";
import { MainContent } from "./mainContent";
import { MoreItems } from "./moreItems";

const styles = StyleSheet.create({
  app: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1
  }
});

export const HomeScreen = ({ id }: { id: number }) => {
  const currentItem: ItemType = dataObj[id];
  const otherItems: ItemType[] = dataObj;

  return (
    <View style={styles.app}>
      <MainContent item={currentItem} />
      <MoreItems items={otherItems} />
    </View>
  );
};
