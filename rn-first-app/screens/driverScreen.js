import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Picker,
  Button,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as senderActions from "../store/actions/drivers";
import { useSelector, useDispatch } from "react-redux";

const driverScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [arrayHolder, setArrayHolder] = useState([]);

  const selectedDrivers = useSelector((state) => state.reducerdriver.drivers);
  const dispatch = useDispatch();

  const loadDrivers = useCallback(async () => {
    setIsLoading(true);
    await dispatch(senderActions.fetchDriver());
    //setData(selectedDrivers);
    // setArrayHolder(selectedDrivers);
    setIsLoading(false);
  });

  useEffect(() => {
    const willFocusSub = props.navigation.addListener("willFocus", loadDrivers);

    return () => {
      willFocusSub.remove();
    };
  }, [loadDrivers]);

  useEffect(() => {
    loadDrivers();
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }
  console.log(selectedDrivers);
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  const renderDriver = (itemData) => {
    return (
      <TouchableCmp>
        <View style={styles.product}>
          <View>
            <View style={styles.container}>
              <Text style={styles.title}>{itemData.item.name}</Text>
              <Text style={styles.email}>{itemData.item.email}</Text>
              <Text style={styles.status}>{itemData.item.status}</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#E9446A" }}>
            <TouchableOpacity
              style={styles.container}
              onPress={() => props.navigation.navigate("DriverNotFound")}
            >
              <Text style={styles.request}>Request</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableCmp>
    );
  };
  return (
    <View>
      {/* <TouchableOpacity
        style={{ padding: 15 }}
        onPress={props.navigation.openDrawer}
      >
        <FontAwesome5 name="bars" size={24} color="#161924" />
      </TouchableOpacity> */}
      <View style={styles.container}>
        <Text style={styles.driver}>Available Drivers</Text>
      </View>
      <FlatList
        data={selectedDrivers}
        keyExtractor={(item, index) => item.id}
        renderItem={renderDriver}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  driver: {
    fontSize: 20,
    fontWeight: "normal",
    textTransform: "uppercase",
    marginTop: -10,
    marginBottom: 20,
  },
  product: {
    width: "90%",
    maxWidth: "90%",
    paddingVertical: "5%",
    shadowColor: "black",
    shadowOpacity: 0.86,
    shadowOffset: { width: 10, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "#212121",
    marginLeft: 18,
    marginBottom: 12,
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
  request: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
  email: {
    fontSize: 18,
    marginVertical: 4,
    color: "#FFFFFF",
  },
  status: {
    fontSize: 18,
    marginVertical: 4,
    color: "#FFFFFF",
  },
  image: {
    width: "50%",
    height: "50%",
  },

  button: {
    marginTop: "1%",
    borderRadius: 20,
    color: "#E9446A",
    overflow: "hidden",
    paddingHorizontal: "6%",
    elevation: 5,
    justifyContent: "center",
    height: "60%",
  },

  buttonText: {
    alignItems: "center",
    fontSize: 13,
    color: "white",
    textTransform: "uppercase",
  },
});

export default driverScreen;
