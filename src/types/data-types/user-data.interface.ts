export interface IUserData {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  name: string;
  data: IUserInfo | null;
}

export interface IUserInfo {
  id: number;
  createdAt: string;
  updatedAt: string;
  height: number;
  weight: number;
  age: number;
  userAvatar: string;
  userId: number;
}
