import { call, put, takeEvery } from "redux-saga/effects";
import { Product } from "./types";
import { fetchProductsRequest, fetchProductsSuccess } from "./slice";
import axios from "axios";

export function* productsSaga() {
  yield takeEvery(fetchProductsRequest.type, workGetproductsFetch);
}

function* workGetproductsFetch(): any {
  const response = yield call(
    axios.get,
    "https://api.slingacademy.com/v1/sample-data/users?offset=0&limit=40"
  );
  const products: Product[] = response.data.users;
  yield put(fetchProductsSuccess(products));
}
export default productsSaga;
