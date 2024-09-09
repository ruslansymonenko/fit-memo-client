import { IUser } from '@/types/data-types/user.interface';

export interface IAuthResponse {
  user: IUser;
  accessToken: string;
}
