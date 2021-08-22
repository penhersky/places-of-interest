import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

function configureStore(preloadedState: any): Store {
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers =
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(...enhancers)
      : undefined;
  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  return store;
}

const store = configureStore({});

export default store;
