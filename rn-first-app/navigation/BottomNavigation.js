import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import React from "react";
import touristScreen from "../screens/touristScreen";
import driverScreen from "../screens/driverScreen";
import HomeScreen from "../screens/HomeScreen";

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-home" size={30} color={tintColor} />
        ),
      },
    },

    driver: {
      screen: driverScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-person-add" size={30} color={tintColor} />
        ),
      },
    },
    tourist: {
      screen: touristScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-man" size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#E9446A",
      inactiveTintColor: "gray",
      showLabel: false,
    },
  }
);

export default createAppContainer(AppTabNavigator);
