import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { OFFICIALS } from "../shared/officialItems";

class Gear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: OFFICIALS,
    };
  }

  static navigationOptions = {
    title: "Official Gears",
  };
  render() {
    const renderItem = ({ item }) => {
      return (
        <Card>
          <Card.Image source={item.image} resizeMode="cover" />
          <Text>{item.title}</Text>
          <Text>${item.price}</Text>
        </Card>
      );
    };
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </SafeAreaView>
    );
  }
}

export default Gear;
