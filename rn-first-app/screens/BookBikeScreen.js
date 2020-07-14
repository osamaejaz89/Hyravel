import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as bookActions from "../store/actions/bookbike";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { BIKES } from "../data/dummy-bike";

const BookBikeScreen = (props) => {
  const bikeId = props.navigation.getParam("bikeId");
  const selectedBike = BIKES.find((bike) => bike.id === bikeId);

  const [book_cnic, setcnic] = useState("");
  const [book_fromdate, setfromdate] = useState("");
  const [book_todate, settodate] = useState("");
  const [book_description, setdescription] = useState("");

  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image source={{ uri: selectedBike.imageUrl }} style={styles.image} />

      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>From Date</Text>
          <TextInput
            style={styles.input}
            id="FromDate"
            label="FromDate"
            keyboardType="default"
            placeholder="DD-MM-YYYY"
            placeholderTextColor="#929191"
            required
            autoCapitalize="none"
            value={book_fromdate}
            onChangeText={(text) => setfromdate(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>To Date</Text>
          <TextInput
            style={styles.input}
            id="toDate"
            label="toDate"
            keyboardType="default"
            placeholder="DD-MM-YYYY"
            placeholderTextColor="#929191"
            required
            autoCapitalize="none"
            value={book_todate}
            onChangeText={(text) => settodate(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>CNIC</Text>
          <TextInput
            style={styles.input}
            id="CNIC"
            label="CNIC"
            keyboardType="default"
            placeholder="42201-1234567-1"
            placeholderTextColor="#929191"
            required
            autoCapitalize="none"
            value={book_cnic}
            onChangeText={(text) => setcnic(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            id="description"
            label="description"
            keyboardType="default"
            placeholder="Description"
            placeholderTextColor="#929191"
            required
            autoCapitalize="none"
            value={book_description}
            onChangeText={(text) => setdescription(text)}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch(
                bookActions.bookBike(
                  book_fromdate,
                  book_todate,
                  book_cnic,
                  book_description
                )
              );

              settodate("");
              setfromdate("");
              setcnic("");
              setdescription("");

              props.navigation.pop(2);
            }}
          >
            <Text style={{ color: "#ffffff" }}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
BookBikeScreen.navigationOptions = (navigationData) => {
  const bikeId = navigationData.navigation.getParam("bikeId");
  const selectedBike = BIKES.find((bike) => bike.id === bikeId);
};
const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: "100%",
  },
  label: {
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  button: {
    marginTop: "1%",
    borderRadius: 20,
    backgroundColor: "#E9446A",
    overflow: "hidden",
    padding: "3%",
    paddingHorizontal: "10%",
    alignItems: "center",
    elevation: 5,
    //flexDirection: "row"
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default BookBikeScreen;
