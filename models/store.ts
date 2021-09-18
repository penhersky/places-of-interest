import { StateType as IEnvironmentStore } from "../store/environment/reducer";

export interface IStore {
  environment: IEnvironmentStore;
}
