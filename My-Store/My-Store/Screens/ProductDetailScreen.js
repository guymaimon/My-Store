import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../store/actions/products";
import { useSelector, useDispatch } from "react-redux";

const ProductDetailScreen = (props) => {
  const availableProducts = useSelector((state) => state.products.products);
  const productId = props.navigation.getParam("productId");


  const currentProductIsFavorite = useSelector((state) =>
    state.products.favoriteProducts.some((product) => product.id === productId)
  );

  const selectedProduct = availableProducts.find((product) => product.id === productId);
  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);


  useEffect(() => {
    props.navigation.setParams({ isFav: currentProductIsFavorite });
  }, [currentProductIsFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedProduct.imageUrl }} style={styles.image} />
      <View style={{ ...styles.productRow, ...styles.productDetail }}>
        <Text>{selectedProduct.description}</Text>
        <Text>{selectedProduct.finalPrice}</Text>
        <Text>{selectedProduct.delivery}</Text>
      </View>
      <Text style={styles.title}>Description</Text>
      <View style={styles.listItem}>
        <Text>{selectedProduct.description}</Text>
      </View>
      <Text style={styles.title}>Sizes</Text>
      {selectedProduct.steps.map((size) => (
        <View style={styles.listItem}>
          <Text key={size}>{size}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
ProductDetailScreen.navigationOptions = (navigationData) => {
  const productTitle = navigationData.navigation.getParam("productTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");

  const isFavorite = navigationData.navigation.getParam("isFav");

  return {
    headerTitle: productTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default ProductDetailScreen;