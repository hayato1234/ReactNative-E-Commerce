import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { ITEMS } from "../shared/items";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ITEMS,
    };
  }
  static navigationOptions = {
    title: "Home",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderItem = ({ item }) => {
      return (
        <ListItem
          style={{ flex: 1 }}
          onPress={() => navigate("ItemDetail", { itemId: item.id })}
        >
          <Card featuredTitle={item.title}>
            <Card.Image source={item.image} resizeMode="center" />
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
          </Card>
        </ListItem>
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
