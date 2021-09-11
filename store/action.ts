import { IAuthUser } from "../models/entity";
import {
  CLOSE_AUTH_MODEL,
  LOAD_ENVIRONMENT,
  LOG_OUT,
  OPEN_AUTH_MODEL,
  SET_AUTH_USER,
} from "./environment/types";
import store from "./store";

export const loadEnvironment = () => store.dispatch({ type: LOAD_ENVIRONMENT });
export const setAuthUser = (user: IAuthUser) =>
  store.dispatch({ type: SET_AUTH_USER, payload: user });
export const logOut = () => store.dispatch({ type: LOG_OUT });

export const openAuthModel = () => store.dispatch({ type: OPEN_AUTH_MODEL });
export const closeAuthModel = () => store.dispatch({ type: CLOSE_AUTH_MODEL });
