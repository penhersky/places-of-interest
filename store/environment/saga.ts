import axios from "axios";
import { call, put, spawn, takeLatest } from "redux-saga/effects";

import { LOAD_ENVIRONMENT, SET_AUTH_USER } from "./types";

const { API_URL } = process.env;

const getAuthUser = async () => axios.get(`${API_URL}/authUser`);

export function* loadUser(): Generator {
  const response: any = yield call(getAuthUser);

  yield put({ type: SET_AUTH_USER, payload: response.data });
}

export function* environmentWorker() {
  yield spawn(loadUser);
}

export function* watchEnvironment() {
  yield takeLatest(LOAD_ENVIRONMENT, environmentWorker);
}

export default function* environmentSaga() {
  yield watchEnvironment();
}
