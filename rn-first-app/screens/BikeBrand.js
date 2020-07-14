import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { BRANDS } from "../data/dummy-bike";
import CategoryGridBike from "../components/CategoryGridBike";

const BikeScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridBike
        title={itemData.item.title}
        image={itemData.item.image}
        onSelect={() => {
          props.navigation.navigate("BM", { brandId: itemData.item.id });
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={BRANDS}
      renderItem={renderGridItem}
      numColumns={1}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BikeScreen;
