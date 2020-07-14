import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default class ReportScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity
              style={{ padding: 15 }}
              onPress={this.props.navigation.openDrawer}
            >
              <FontAwesome5 name="bars" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.headerContent}>
            <Image style={styles.avatar} source={require("../assets/mj.jpg")} />

            <Text style={styles.name}>Manish Jewlani</Text>
            <Text style={styles.userInfo}>manishj@mail.com </Text>
            <Text style={styles.userInfo}>Karachi</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.item}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#212121",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
    marginTop: -25,
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
  },
  userInfo: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "#fff",
    height: 500,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  },
});
