import React from "react";

import {
  ScrollView,
  Image,
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import { CARS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const CarDetails = (props) => {
  const carId = props.navigation.getParam("carId");
  const selectedCar = useSelector((state) =>
    state.cars.availableCars.find((car) => car.id === carId)
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
      <Image style={styles.image} source={{ uri: selectedCar.imageUrl }} />
      <View style={styles.actions}>
        <Button
          title="Book"
          color="#E9446A"
          onPress={() => {
            props.navigation.navigate("Book", {
              carId: selectedCar.id,
              carTitle: selectedCar.title,
            });
          }}
        />
      </View>
      <Text style={styles.price}>Rs. {selectedCar.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedCar.description}</Text>
    </ScrollView>
  );
};

CarDetails.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("carTitle"),
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

export default CarDetails;
