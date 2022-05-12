import React, { Component } from "react";
import { View, Text, Image, Button, ScrollView } from "react-native";
import { ITEMS } from "../shared/items";

function RenderItem({ item }) {
  return (
    <View>
      <Image
        source={item.image}
        style={{ flex: 1, width: "100%", height: undefined, aspectRatio: 1 }}
        resizeMode="contain"
      />
      <Text>{item.title}</Text>
      <Text>${item.price}</Text>
      <Button title="Add to Cart" />
      <Text>Brand: {item.brand ? item.brand : getItemBrand(item.title)}</Text>
      <Text>
        Condition: {item.condition ? item.condition : item.rating.rate}
      </Text>
      <Text>Model: {item.model ? item.model : "Model 1"}</Text>
      <Text>Year: {item.year ? item.year : "2018"}</Text>
      <Text>
        Comment:{" "}
        {item.comment
          ? item.comment
          : "No commented added. Contact for details"}
      </Text>
    </View>
  );
}

const getItemBrand = (title) => {
  const brandEnd = title.search(" ");
  return title.slice(0, brandEnd);
};

export default class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ITEMS,
    };
  }
  static navigationOptions = {
    title: "Item",
  };
  render() {
    const itemId = this.props.navigation.getParam("itemId");
    const item = this.state.items.find((item) => item.id === itemId);
    return (
      <ScrollView>
        <RenderItem item={item} />
      </ScrollView>
    );
  }
}
