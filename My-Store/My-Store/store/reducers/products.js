import { PRODUCT } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/products";

const initialState = {
  products: PRODUCT,
  filteredProducts: PRODUCT,
  favoriteProducts: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteProducts.findIndex(
        (product) => product.id === action.productId
      );
      if (existingIndex >= 0) {
        const updatedFavproducts = [...state.favoriteProducts];
        updatedFavproducts.splice(existingIndex, 1);
        return { ...state, favoriteProducts: updatedFavproducts };
      } else {
        const product = state.products.find((product) => product.id === action.productId);
        return { ...state, favoriteProducts: state.favoriteProducts.concat(product) };
      }
    // 2.SET_FILTERS:
    case SET_FILTERS:
      // extract filter from the actions:
      const appliedFilters = action.filters;
      const updatedFavproducts = state.products.filter((product) => {
        if (appliedFilters.glutenFree && !product.isGlutenFree) return false;
        if (appliedFilters.lactoseFree && !product.isLactoseFree) return false;
        if (appliedFilters.vegetarian && !product.isVegetarian) return false;
        if (appliedFilters.vegan && !product.isVegan) return false;
        return true;
      });
      return { ...state, filteredProducts: updatedFavproducts };
    default:
      return state;
  }
};

export default productsReducer;