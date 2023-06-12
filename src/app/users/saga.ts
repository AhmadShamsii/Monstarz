import { call, put, takeEvery } from "redux-saga/effects";
import { User } from "./types";
import { fetchUsersRequest, fetchUsersSuccess } from "./slice";
import axios from "axios";

export function* usersSaga() {
  yield takeEvery(fetchUsersRequest.type, workGetUsersFetch);
}

function* workGetUsersFetch(): any {
  const response = yield call(
    axios.get,
    "https://api.slingacademy.com/v1/sample-data/users?offset=0&limit=40"
  );
  const users: User[] = response.data.users;
  yield put(fetchUsersSuccess(users));

  console.log(users);
}
export default usersSaga;
