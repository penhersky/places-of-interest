import { call, put, spawn, takeLatest } from "redux-saga/effects";

import client from "../../services/client";
import { query } from "../../services/schemas";
import { LOAD_ENVIRONMENT, SET_AUTH_USER } from "./types";

const getAuthUser = async () => {
  const { data } = await client.query({
    query: query.user.AUTH_USER,
    variables: { id: 1 },
  });
  return data.AuthUser;
};

export function* loadUser(): Generator {
  const data: any = yield call(getAuthUser);

  yield put({ type: SET_AUTH_USER, payload: data });
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
