import { IUser } from "../entity";
import { IServiceError } from "../services";

export interface IPublicProfile {
  user: IUser;
}

export interface IAccountSettings {}
export interface INotificationsSettings {}
export interface ISecuritySettings {}

export interface ISettingsData {
  publicProfile: IPublicProfile;
  accountSettings: {};
  notifications: {};
  Security: {};
}

export type ISettingsProps = {
  data?: ISettingsData;
  error: IServiceError;
};
