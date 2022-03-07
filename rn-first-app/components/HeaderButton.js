import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../constants/Colors";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  const openProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={{ padding: 10 }} onPress={openMenu}>
        <FontAwesome5 name="bars" size={24} color="#161924" />
      </TouchableOpacity>
      <View>
        <Text style={styles.headerText}>Hyravel</Text>
      </View>
      <TouchableOpacity style={{ left: "400%" }} onPress={openProfile}>
        <FontAwesome5 name="user" size={24} color="#161924" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    alignContent: "center",
    alignItems: "center",
    left: "100%",
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 12,
  },
  righticon: {
    position: "absolute",
    right: 16,
  },
});
