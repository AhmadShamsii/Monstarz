import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import productsReducer from "./products/slice";
import usersReducer from "./users/slice";

import rootSaga from "./rootSage";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
