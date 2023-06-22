import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsState, Product } from "./types";

export const initialState: ProductsState = {
  products: {
    productsData: [],
    isLoading: false,
    cart: [],
    favourites: [],
    iconColor: {},
    admin: false,
    monsters: [],
    robots: [],
    avatars: [],
    roboHeads: [],
    order: [],
    totalOrders: [],
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsRequest: (state) => {
      state.products.isLoading = true;
    },
    fetchProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.products.productsData = action.payload;
      state.products.isLoading = false;
      state.products.monsters = action.payload.slice(0, 10);
      state.products.robots = action.payload.slice(10, 25);
      state.products.avatars = action.payload.slice(25, 32);
      state.products.roboHeads = action.payload.slice(32, 40);
    },
    fetchProductsError: (state) => {
      state.products.isLoading = false;
    },

    addToCart: (state, action) => {
      const existingCartItems = state.products.cart.find(
        (product) => product.id === action.payload.id
      );

      if (existingCartItems) {
        state.products.cart = state.products.cart.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        state.products.cart = [
          ...state.products.cart,
          { ...action.payload, quantity: 1 },
        ];
      }
    },

    cartClearAll: (state) => {
      state.products.cart = [];
    },
    removeFromCart: (state, action) => {
      state.products.cart = action.payload.data.filter(
        (item) => item.id !== action.payload.index.id
      );
    },
    addToFavourites: (state, action) => {
      state.products.favourites = [
        ...state.products.favourites,
        action.payload.index,
      ];
    },
    setFavColor: (state, action) => {
      const { id } = action.payload;
      state.products.iconColor[id] =
        state.products.iconColor[id] === "#ff0000" ? "#CDE4F9" : "#ff0000";
    },
    removeFromFavourites: (state, action) => {
      state.products.favourites = action.payload.favourites.filter(
        (item) => item.id !== action.payload.index.id
      );
    },
    incrementQuantity: (state: any, action) => {
      state.products.cart = state.products.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      });
    },
    decrementQuantity: (state: any, action) => {
      state.products.cart = state.products.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const newQuantity = cartItem.quantity - 1;
          return {
            ...cartItem,
            quantity: newQuantity >= 1 ? newQuantity : 1,
          };
        }
        return cartItem;
      });
    },
    switchUser: (state) => {
      state.products.admin = !state.products.admin;
    },
    editProduct: (state, action) => {
      const editedData = action.payload;
      state.products.productsData = state.products.productsData.map((item) => {
        if (item.id === editedData.id) {
          return editedData;
        } else {
          return item;
        }
      });
    },
    removeProduct: (state, action) => {
      state.products.productsData = action.payload.data.filter(
        (item) => item.id !== action.payload.index.id
      );
    },
    addProduct: (state, action) => {
      if (action.payload.category === "monster") {
        state.products.monsters = [action.payload, ...state.products.monsters];
        state.products.productsData = [
          action.payload,
          ...state.products.productsData,
        ];
      } else if (action.payload.category === "robot") {
        state.products.robots = [action.payload, ...state.products.robots];
        state.products.productsData = [
          action.payload,
          ...state.products.productsData,
        ];
      } else if (action.payload.category === "avatar") {
        state.products.avatars = [action.payload, ...state.products.avatars];
        state.products.productsData = [
          action.payload,
          ...state.products.productsData,
        ];
      } else if (action.payload.category === "roboHead") {
        state.products.roboHeads = [
          action.payload,
          ...state.products.roboHeads,
        ];
        state.products.productsData = [
          action.payload,
          ...state.products.productsData,
        ];
      }
    },
    createOrder: (state) => {
      state.products.order = state.products.cart.map((obj) => {
        const currentDate = new Date();
        const date = currentDate.toLocaleDateString();
        const time = currentDate.toLocaleTimeString();

        if (obj) {
          return { ...obj, date: date, time: time };
        }
        return obj;
      });
    },
    recordOrders: (state, action) => {
      state.products.totalOrders = [
        ...state.products.totalOrders,
        action.payload,
      ];
    },
  },
});

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
  addToCart,
  addToFavourites,
  setFavColor,
  removeFromFavourites,
  cartClearAll,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  switchUser,
  editProduct,
  removeProduct,
  addProduct,
  createOrder,
  recordOrders,
} = productsSlice.actions;
export default productsSlice.reducer;
