import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import usersReducer from "./users/slice";
// import nftReducer from "./nft/slice";

import rootSaga from "./rootSage";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    users: usersReducer,
    // nfts: nftReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
