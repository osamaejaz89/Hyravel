import React from "react";

import {
  ScrollView,
  Image,
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import { BIKES } from "../data/dummy-bike";
import { useSelector } from "react-redux";

const BikeDetails = (props) => {
  const bikeId = props.navigation.getParam("bikeId");
  const selectedBike = useSelector((state) =>
    state.bikes.availableBikes.find((bike) => bike.id === bikeId)
  );
  return (
    // <ScrollView>
    //   <Image source={{ uri: selectedCar.imageUrl }} style={styles.image} />
    //   <View style={styles.details}>
    //     <Text>Rs. {selectedCar.price}</Text>
    //     <Text>{selectedCar.complexity.toUpperCase()}</Text>
    //     <Text>{selectedCar.affordability.toUpperCase()}</Text>
    //   </View>
    //   <Text style={styles.title}>Cars</Text>
    //   <View style={styles.container}>
    //     <Text>Car Details Screen</Text>
    //     <Text>{selectedCar.title}</Text>
    //   </View>

    // </ScrollView>
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedBike.imageUrl }} />
      <View style={styles.actions}>
        <Button
          title="Book"
          color="#E9446A"
          onPress={() => {
            props.navigation.navigate("BookBike", {
              bikeId: selectedBike.id,
              bikeTitle: selectedBike.title,
            });
          }}
        />
      </View>
      <Text style={styles.price}>Rs. {selectedBike.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedBike.description}</Text>
    </ScrollView>
  );
};

BikeDetails.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("bikeTitle"),
  };
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default BikeDetails;
