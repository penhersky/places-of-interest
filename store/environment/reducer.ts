import { IAuthUser } from "../../models/entity";
import {
  CLOSE_AUTH_MODEL,
  LOG_OUT,
  OPEN_AUTH_MODEL,
  SET_AUTH_USER,
} from "./types";

export interface IAction<T> {
  type: string;
  payload?: T;
}

export type StateType = {
  authUser?: IAuthUser;
  openAuthModal: boolean;
};

export const initialState: StateType = {
  authUser: undefined,
  openAuthModal: false,
};

const environment = (
  state: StateType = initialState,
  action: IAction<IAuthUser>
): StateType => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        authUser: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        authUser: undefined,
      };
    case OPEN_AUTH_MODEL:
      return {
        ...state,
        openAuthModal: true,
      };
    case CLOSE_AUTH_MODEL:
      return {
        ...state,
        openAuthModal: false,
      };
    default:
      return state;
  }
};

export default environment;
