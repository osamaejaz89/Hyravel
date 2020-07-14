import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  TouchableNativeFeedback,
  Platform,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import * as bookActions from "../store/actions/book";

const RidesScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [arrayHolder, setArrayHolder] = useState([]);

  const selectedBook = useSelector((state) => state.reducerbook.book);
  const dispatch = useDispatch();

  const loadBook = useCallback(async () => {
    setIsLoading(true);
    await dispatch(bookActions.fetchCar());

    setIsLoading(false);
  });

  useEffect(() => {
    const willFocusSub = props.navigation.addListener("willFocus", loadBook);

    return () => {
      willFocusSub.remove();
    };
  }, [loadBook]);

  useEffect(() => {
    loadBook();
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }
  console.log(selectedBook);
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  const renderRider = (itemData) => {
    return (
      <TouchableCmp>
        <View style={styles.product}>
          <View>
            <View style={styles.container}>
              <Text style={styles.title}>{itemData.item.displayName}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.date}>{itemData.item.book_fromdate}</Text>
                <Text style={{ fontSize: 18, color: "#fff" }}> --- </Text>
                <Text style={styles.date}>{itemData.item.book_fromdate}</Text>
              </View>
              <Text style={styles.description}>
                {itemData.item.book_description}
              </Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#E9446A" }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.tbutton}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableCmp>
    );
  };
  return (
    <View>
      <TouchableOpacity
        style={{ padding: 15 }}
        onPress={props.navigation.openDrawer}
      >
        <FontAwesome5 name="bars" size={24} color="#161924" />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.ctitle}>Car Bookings</Text>
      </View>

      <View style={{ padding: 10 }}>
        <FlatList
          data={selectedBook}
          keyExtractor={(item, index) => item.key}
          renderItem={renderRider}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  product: {
    width: "97%",
    maxWidth: "97%",
    paddingVertical: "5%",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 10, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "black",
    padding: 10,
    marginBottom: 15,
    marginLeft: 6,
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    width: "50%",
    height: "50%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#00F3FF",
  },
  tbutton: {
    fontSize: 18,
    marginVertical: 4,
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
  ctitle: {
    fontSize: 25,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    marginVertical: 4,
    color: "#FFFFFF",
  },
  image: {
    width: "50%",
    height: "50%",
  },

  button: {
    marginTop: 5,
    borderRadius: 20,
    color: "#E9446A",
    overflow: "hidden",
    paddingHorizontal: "6%",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    alignItems: "center",
    fontSize: 13,
    color: "white",
    textTransform: "uppercase",
  },
  description: {
    alignItems: "center",
    fontSize: 14,
    color: "#FFFFFF",
    textTransform: "uppercase",
    marginBottom: 10,
  },
});

export default RidesScreen;
