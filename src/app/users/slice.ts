import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UsersState, User } from "./types";

export const initialState: UsersState = {
  users: {
    usersData: [],
    isLoading: false,
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
    addUser: (state, action) => {
      console.log(action.payload);
      state.users.usersData = [action.payload, ...state.users.usersData];
    },
    editUser: (state, action) => {
      const editedData = action.payload;
      state.users.usersData = state.users.usersData.map((user) => {
        if (user.login.uuid === editedData.login.uuid) {
          return editedData;
        } else {
          return user;
        }
      });
    },
    removeUser: (state, action) => {
      state.users.usersData = action.payload.data.filter(
        (item) => item.id !== action.payload.index.id
      );
    },
  },
});

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,
  addUser,
  editUser,
  removeUser,
} = usersSlice.actions;
export default usersSlice.reducer;
