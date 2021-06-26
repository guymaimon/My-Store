import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import StoreNavigation from "./navigation/StoreNavigation";

// 1. import:
// combineReducers - merges all reducers (in bigger apps we have more than 1)
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import productsReducer from "./store/reducers/products";

// 2: here we can put all the reducers we have:
const rootReducer = combineReducers({
  products: productsReducer,
});

// 3: create a store with rootReducer
const store = createStore(rootReducer);
const fetchFonts = () => {
  Font.loadAsync({
    "pattaya-regular": require("./assets/fonts/Pattaya-Regular.ttf"),
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.warn(error)}
      />
    );
  }

  return (
    <Provider store={store}>
      <StoreNavigation />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;