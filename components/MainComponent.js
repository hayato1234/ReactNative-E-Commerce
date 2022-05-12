import React, { Component } from "react";
import { View, Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Constants from "expo-constants";
import Home from "./HomeComponent";
import ItemDetail from "./ItemDetailComponent";

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    ItemDetail: { screen: ItemDetail },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#009C9E",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#009C9E",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}
      >
        <AppContainer />
      </View>
    );
  }
}
