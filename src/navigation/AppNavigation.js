import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../Theme";
import { BookedScreen } from "../screens/BookedScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { CreateScreen } from "../screens/CreateScreen";

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
  },
};

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: PostScreen,
  },
  navigatorOptions
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen,
  },
  navigatorOptions
);

const BottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: "All posts",
      tabBarIcon: (info) => (
        <Ionicons name="ios-albums" size={25} color={info.tintColor} />
      ),
    },
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: "Selected posts",
      tabBarIcon: (info) => (
        <Ionicons name="ios-star" size={25} color={info.tintColor} />
      ),
    },
  },
};

const BottomNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(BottomTabsConfig, {
        activeTintColor: "#fff",
        shifting: true,
        barStyle: {
          backgroundColor: THEME.MAIN_COLOR,
        },
      })
    : createBottomTabNavigator(BottomTabsConfig, {
        tabBarOptions: {
          activeTintColor: THEME.MAIN_COLOR,
        },
      });

const MainNavigator = createDrawerNavigator({
  PostTabs: {
    screen: BottomNavigator,
  },
  About: {
    screen: AboutScreen,
  },
  Create: {
    screen: CreateScreen,
  },
});

export const AppNavigation = createAppContainer(MainNavigator);
