import { initialState } from "./slice";
import { createSelector } from "@reduxjs/toolkit";
const productInitialState = (state) => state.products || initialState;

const productsSelector = createSelector(
  [productInitialState],
  (state) => state.products
);

export { productsSelector };
