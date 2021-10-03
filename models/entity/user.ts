export interface IAuthUser {
  id: string;
  name: string;
  email: string;
  image?: string;
}
export interface IUser {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
  backgroundImage?: string;
  gender?: string;
  birthday?: string;
  phoneNumber?: string;
  createdAt: string;
}
