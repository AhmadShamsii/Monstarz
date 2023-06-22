import { call, put, takeEvery } from "redux-saga/effects";
import { User } from "./types";
import { fetchUsersRequest, fetchUsersSuccess } from "./slice";
import axios from "axios";

export function* usersSaga() {
  yield takeEvery(fetchUsersRequest, workGetUsersFetch);
}

function* workGetUsersFetch(): any {
  const response = yield call(
    axios.get,
    "https://randomuser.me/api/?results=50"
  );
  const users: User[] = response.data.results;
  console.log(users);
  yield put(fetchUsersSuccess(users));
}
export default usersSaga;
