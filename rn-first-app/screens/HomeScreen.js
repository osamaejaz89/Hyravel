import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as firebase from "firebase";

export default class HomeScreen extends React.Component {
  state = {
    email: "",
    displayName: "",
  };

  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;
    this.setState({ email, displayName });
  }
  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
      TouchableCmp = TouchableNativeFeedback;
    }
    return (
      <View style={styles.navigate}>
        <ScrollView>
          <TouchableOpacity
            style={{ padding: 10 }}
            onPress={this.props.navigation.openDrawer}
          >
            <FontAwesome5 name="bars" size={24} color="#161924" />
          </TouchableOpacity>

          <View style={{ flex: 1 }}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={styles.welcome}>Good Morning</Text>
              <Text style={styles.title}>{this.state.displayName}</Text>
              <Text style={styles.selectvehicle}>Select Vehicle</Text>
            </View>
            <View style={{ justifyContent: "center" }}>
              <TouchableCmp
                onPress={() => this.props.navigation.navigate("Car")}
                useForeground
              >
                <View style={styles.product}>
                  <View style={styles.touchable}>
                    <View style={styles.imageContainer}>
                      <ImageBackground
                        style={styles.image}
                        source={require("../assets/car.png")}
                      />
                    </View>
                  </View>
                </View>
              </TouchableCmp>
            </View>

            <TouchableCmp
              onPress={() => this.props.navigation.navigate("Bike")}
              useForeground
            >
              <View style={styles.product}>
                <View style={styles.imageContainer}>
                  <ImageBackground
                    style={styles.image}
                    source={require("../assets/bike.png")}
                  />
                </View>
              </View>
            </TouchableCmp>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.86,
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
    width: "90%",
    height: 200,
    margin: 20,
    backgroundColor: "#F9F9F9",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  navigate: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    marginVertical: 4,
    color: "#FFFFFF",
    backgroundColor: "#212121",
  },
  details: {
    alignItems: "center",
    height: "5%",
    padding: 10,
    backgroundColor: "#212121",
  },

  imageContainer: {
    width: "100%",
    height: "80%",
    marginTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  welcome: {
    fontSize: 15,
    fontWeight: "200",
    textTransform: "uppercase",
    marginTop: -20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  selectvehicle: {
    fontSize: 20,
    marginTop: 35,
    textTransform: "uppercase",
  },
});
