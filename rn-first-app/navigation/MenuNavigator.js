import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import React from "react";

import { Dimensions } from "react-native";

import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import PaymentScreen from "../screens/PaymentScreen";
import CalendarScreen from "../screens/CalendarScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import BottomNavigation from "./BottomNavigation";
import RideNavigation from "./TopNavigation";
import drivernotfound from "../screens/drivernotfound";

import SideBar from "../components/Sidebar";

import LoadingScreen from "../screens/LoadingScreen";
import RegisterScreen from "../screens/RegisterScreen";

import LoginScreen from "../screens/LoginScreen";
import SplashComponent from "../components/SplashComponent";
import CarBrand from "../screens/CarBrand";
import BikeBrand from "../screens/BikeBrand";
import CarModels from "../screens/CarModels";
import BikeModels from "../screens/BikeModels";
import CarDetails from "../screens/CarDetails";
import BikeDetails from "../screens/BikeDetails";
import BookScreen from "../screens/BookScreen";
import BookBikeScreen from "../screens/BookBikeScreen";
import Header from "../components/HeaderButton";

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      screen: BottomNavigation,
      navigationOptions: {
        title: "Home",
        drawerIcon: ({ tintColor }) => (
          <Feather name="home" size={16} color={tintColor} />
        ),
      },
    },
    Payment: {
      screen: PaymentScreen,
      navigationOptions: {
        title: "Wallet",
        drawerIcon: ({ tintColor }) => (
          <Feather name="credit-card" size={16} color={tintColor} />
        ),
      },
    },
    Rides: {
      screen: RideNavigation,
      navigationOptions: {
        title: "My Rides",
        drawerIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="car-sports"
            size={16}
            color={tintColor}
          />
        ),
      },
    },
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        title: "Rides Calendar",
        drawerIcon: ({ tintColor }) => (
          <Feather name="calendar" size={16} color={tintColor} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: "Profile",
        drawerIcon: ({ tintColor }) => (
          <Feather name="user" size={16} color={tintColor} />
        ),
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: "Settings",
        drawerIcon: ({ tintColor }) => (
          <Feather name="settings" size={16} color={tintColor} />
        ),
      },
    },
  },
  {
    contentComponent: (props) => <SideBar {...props} />,
    drawerWidth: Dimensions.get("window").width * 0.85,
    hideStatusBar: true,

    contentOptions: {
      activeBackgroundColor: "#E9446A",
      activeTintColor: "#53115B",
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontal: 8,
      },
      itemStyle: {
        borderRadius: 4,
      },
    },
  }
);

const AppStack = createStackNavigator({
  Home: {
    screen: DrawerNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
        headerShown: false,
      };
    },
  },
  Car: {
    screen: CarBrand,
  },
  CM: CarModels,
  CD: CarDetails,
  Bike: {
    screen: BikeBrand,
  },
  BM: BikeModels,
  BD: BikeDetails,
  Book: BookScreen,
  BookBike: BookBikeScreen,
  DriverNotFound: drivernotfound,
  Profile: ProfileScreen,
});

const AuthStack = createStackNavigator({
  Splash: SplashComponent,
  Login: LoginScreen,
  Register: RegisterScreen,
});

const MainNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: "Loading",
  }
);

export default AppNavigator = createAppContainer(MainNavigator);
