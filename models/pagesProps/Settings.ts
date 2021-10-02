import { IUser } from "../entity";
import { IServiceError } from "../services";

export interface IPublicProfile {
  user: IUser;
}

export interface ILoginAndSecurity {}
export interface INotificationsSettings {}
export interface IPrivacyAndSharing {}
export interface IGlobalPreferences {}

export interface ISettingsData {
  personalInfo: IPublicProfile;
  loginAndSecurity: ILoginAndSecurity;
  notifications: INotificationsSettings;
  privacyAndSharing: IPrivacyAndSharing;
  globalPreferences: IGlobalPreferences;
}

export type ISettingsProps = {
  data?: ISettingsData;
  error: IServiceError;
};
