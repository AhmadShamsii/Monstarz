import { fork, all } from "redux-saga/effects";

import usersSaga from "./users/saga";
// import nftSaga from "./nft/saga";

function* rootSaga() {
  yield all([
    fork(usersSaga),
    //  fork(nftSaga)
  ]);
}

export default rootSaga;
