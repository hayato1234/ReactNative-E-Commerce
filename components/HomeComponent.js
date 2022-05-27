import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Card, Icon, ListItem } from "react-native-elements";
import { ITEMS } from "../shared/items";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ITEMS,
    };
  }
  static navigationOptions = {
    title: "Home1",
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" type="font-awesome" size={24} color={tintColor} />
    ),
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigate("ItemDetail", { itemId: item.id })}
        >
          <Card
            onPress={() => navigate("ItemDetail", { itemId: item.id })}
            featuredTitle={item.title}
          >
            <Card.Image source={item.image} resizeMode="center" />
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
          </Card>
        </TouchableOpacity>
      );
    };
    return (
      <FlatList
        data={this.state.items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    );
  }
}

{
  /* <Card
        featuredTitle={item.name}
        image={require("./images/react-lake.jpg")}
      >
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card> */
}
