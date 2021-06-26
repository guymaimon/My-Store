import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategortriesScreen from "../screens/CategortriesScreen";
import CategoryProductScreen from "../screens/CategoryProductScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import FavoriteProductScreen from "../screens/FavoriteProductScreen";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

// import:
import { createDrawerNavigator } from "react-navigation-drawer";
import FiltersScreen from "../screens/FiltersScreen";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTintColor: 'white',
  headerTitle: "A Screen",
};

const StoreNavigation = createStackNavigator(
  {
    Categortries: CategortriesScreen,
    CategoryProduct: {
      screen: CategoryProductScreen,
    },
    ProductDetail: ProductDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoriteProductScreen,
    ProductDetail: ProductDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const ProductsFavTabNavigator = createBottomTabNavigator(
  {
    Products: {
      screen: StoreNavigation,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="trail-sign-outline"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarLabel: "Favorites!",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor,
    },
  }
);

// Now is the time to use FiltersScreen
// 3. Create createStackNavigator
const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen,
});

const MainNavigator = createDrawerNavigator(
  {
    productsFavs: {
      screen: ProductsFavTabNavigator,
      navigationOptions: {
        // Change title name
        drawerLabel: "Products",
      },
    },
    Filters: FiltersNavigator,
  },
  // We can add third argument that defines the navigator itself:
  // Change the entire font-family and color
  {
    contentOptions: {
      activeTintColor: Colors.secondary,
      labelStyle: {
        // Change font-family
        fontFamily: "pattaya-regular",
      },
    },
  }
);

// 5. export the MainNavigator
export default createAppContainer(MainNavigator);