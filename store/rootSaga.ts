import { all } from "redux-saga/effects";

import { environmentSaga } from "./environment";

export default function* rootSaga() {
  yield all([environmentSaga()]);
}
