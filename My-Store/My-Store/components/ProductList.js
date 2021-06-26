import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ProductItem from "./ProductItem";
const ProductList = props => {
  const renderProductItem = (itemData) => {
      return <ProductItem
      title={itemData.item.title}
      description={itemData.item.description}
      size={itemData.item.size}
      delivery={itemData.item.delivery}
      imageUrl={itemData.item.imageUrl}
      finalPrice={itemData.item.finalPrice}
      onSelectProduct={() => {
        props.navigation.navigate({
          routeName: "ProductDetail",
          params: {
            productId: itemData.item.id,
             // Add:
             productTitle: itemData.item.title
          },
        });
      }}/>
    };
  return (
    <View style={styles.container}>
      <FlatList
        //   change the data from props.
        data={props.listData}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default ProductList;