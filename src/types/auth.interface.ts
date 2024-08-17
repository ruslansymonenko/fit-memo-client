import { IUser } from '@/types/user.interface';

export interface IAuthForm {
  email: string;
  password: string;
}

export interface IAuthResponse {
  user: IUser;
  accessToken: string;
}
