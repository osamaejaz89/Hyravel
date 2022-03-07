import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ScrollView,
} from "react-native";

const TouristItem = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <ScrollView>
      <TouchableCmp>
        <View style={styles.product}>
          <View>
            <View style={styles.container}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.title}>{props.source}</Text>
                <Text style={styles.title}> - </Text>
                <Text style={styles.title}>{props.destination}</Text>
              </View>

              <Text style={styles.price}>{props.description}</Text>
            </View>
          </View>
          <View style={styles.actions}>
            <Button
              title="View Details"
              color="#E9446A"
              onPress={props.onViewDetail}
            />
            <Button title="Book" color="#E9446A" onPress={props.onBook} />
          </View>
        </View>
      </TouchableCmp>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  product: {
    width: "90%",
    maxWidth: "90%",
    height: "90%",
    maxHeight: "90%",
    paddingVertical: "5%",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 10, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "#212121",
    marginLeft: 18,
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  title: {
    alignItems: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: -10,
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
  price: {
    alignItems: "center",
    fontSize: 18,
    marginTop: 6,
    marginBottom: 20,
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
  container: {
    alignItems: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    marginBottom: 15,
    paddingHorizontal: 20,
  },
});

export default TouristItem;
