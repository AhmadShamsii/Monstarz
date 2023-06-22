import { fork, all } from "redux-saga/effects";

import productsSaga from "./products/saga";
import usersSaga from "./users/saga";

function* rootSaga() {
  yield all([
    fork(productsSaga),
    fork(usersSaga)
  ]);
}

export default rootSaga;
