import React from "react";

import ProductList from "../components/ProductList";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";

const CategoryProductScreen = (props) => {
  const productId = props.navigation.getParam("productid");

  const availableProducts = useSelector((state) => state.products.filteredProducts);


  const displayedProducts = availableProducts.filter(
    (product) => product.categoryIds.indexOf(productId) >= 0
  );

  return <ProductList listData={displayedProducts} navigation={props.navigation} />;
};

CategoryProductScreen.navigationOptions = (navigationData) => {
  const productId = navigationData.navigation.getParam("productId");
  const selectedProduct = CATEGORIES.find((product) => product.id === productId);

  return {
    headerTitle: selectedProduct.title,
  };
};

export default CategoryProductScreen;