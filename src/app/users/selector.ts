import { initialState } from "./slice";
import { createSelector } from "@reduxjs/toolkit";
const userInitialState = (state) => state.users || initialState;

const usersSelector = createSelector(
  [userInitialState],
  (state) => state.users
);

export { usersSelector };
