import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

// const { NODE_ENV } = process.env;

const sagaMiddleware = createSagaMiddleware();

function configureStore(preloadedState: any) {
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(...enhancers)
  );

  return store;
}

const store = configureStore({});

sagaMiddleware.run(rootSaga);

export default store;
