import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UsersState, User } from "./types";
export const initialState: UsersState = {
  users: {
    usersData: [],
    isLoading: false,
    cart: [],
    favourites: [],
    iconColor: {},
    admin: false,
  },
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersRequest: (state) => {
      state.users.isLoading = true;
    },
    fetchUsersSuccess: (state, action: PayloadAction<User[]>) => {
      state.users.usersData = action.payload;
      state.users.isLoading = false;
    },
    fetchUsersError: (state) => {
      state.users.isLoading = false;
    },

    addToCart: (state, action) => {
      const existingCartItems = state.users.cart.find(
        (user) => user.id === action.payload.id
      );

      if (existingCartItems) {
        state.users.cart = state.users.cart.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        state.users.cart = [
          ...state.users.cart,
          { ...action.payload, quantity: 1 },
        ];
      }
    },

    cartClearAll: (state) => {
      state.users.cart = [];
    },
    removeFromCart: (state, action) => {
      state.users.cart = action.payload.data.filter(
        (item) => item.id !== action.payload.index.id
      );
    },
    addToFavourites: (state, action) => {
      state.users.favourites = [
        ...state.users.favourites,
        action.payload.index,
      ];
    },
    setFavColor: (state, action) => {
      const { id } = action.payload;
      state.users.iconColor[id] =
        state.users.iconColor[id] === "#ff0000" ? "#CDE4F9" : "#ff0000";
    },
    removeFromFavourites: (state, action) => {
      state.users.favourites = action.payload.favourites.filter(
        (item) => item.id !== action.payload.index.id
      );
    },
    incrementQuantity: (state: any, action) => {
      state.users.cart = state.users.cart.map((cartItem) => {
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
      state.users.cart = state.users.cart.map((cartItem) => {
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
      state.users.admin = !state.users.admin;
    },
    editUser: (state, action) => {
      const editedData = action.payload;
      state.users.usersData = state.users.usersData.map((item) => {
        if (item.id === editedData.id) {
          return editedData;
        } else {
          return item;
        }
      });
    },
    removeUser: (state, action) => {
      state.users.usersData = action.payload.data.filter(
        (item) => item.id !== action.payload.index.id
      );
    },
    addUser: (state, action) => {
      state.users.usersData = [action.payload, ...state.users.usersData];
    },
  },
});

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,
  addToCart,
  addToFavourites,
  setFavColor,
  removeFromFavourites,
  cartClearAll,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  switchUser,
  editUser,
  removeUser,
  addUser,
} = usersSlice.actions;
export default usersSlice.reducer;
