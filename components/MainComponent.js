import React, { Component } from "react";
import { View, Platform, Text, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import Constants from "expo-constants";
import Home from "./HomeComponent";
import ItemDetail from "./ItemDetailComponent";
import About from "./AboutComponent";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Gear from "./GearComponent";
import { Icon } from "react-native-elements";

// -- nav for each screen
const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    ItemDetail: { screen: ItemDetail },
  },
  {
    initialRouteName: "Home",

    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#009C9E",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="bars"
          type="font-awesome"
          containerStyle={{
            marginLeft: 20,
            color: "#fff",
            fontSize: 24,
          }}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#009C9E",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="bars"
          type="font-awesome"
          containerStyle={{
            marginLeft: 20,
            color: "#fff",
            fontSize: 24,
          }}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const GearNavigator = createStackNavigator(
  {
    Gear: { screen: Gear },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#009C9E",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="bars"
          type="font-awesome"
          containerStyle={{
            marginLeft: 20,
            color: "#fff",
            fontSize: 24,
          }}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

// nav for each screen ---

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
      <View style={{ height: 150, backgroundColor: "#009C9E" }} />
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);
const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
    },
    OfficialGears: { screen: GearNavigator },
    About: { screen: AboutNavigator },
  },
  {
    drawerBackgroundColor: "#DCDCDC",
    contentComponent: CustomDrawerContentComponent,
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

const styles1 = StyleSheet.create({
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   drawerHeader: {
//     backgroundColor: "#5637DD",
//     height: 140,
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//     flexDirection: "row",
//   },
//   drawerHeaderText: {
//     color: "#fff",
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   drawerImage: {
//     margin: 10,
//     height: 60,
//     width: 60,
//   },
//   stackIcon: {
//     marginLeft: 10,
//     color: "#fff",
//     fontSize: 24,
//   },
// });
