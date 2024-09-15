import { axiosPrivate } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';
import { IUser } from '@/types/data-types/user.interface';

enum EnumUserPaths {
  GET_BY_ID = '/by-id',
  UPDATE = '/update',
}

interface IUpdateUserData {
  email: string;
  password: string;
}

class UserService {
  async getUserById() {
    try {
      const response = await axiosPrivate<IUser>({
        url: API_URL.user(EnumUserPaths.GET_BY_ID),
        method: 'GET',
      });

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error.message;
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async updateUser(data: IUpdateUserData) {
    try {
      const response = await axiosPrivate<IUser>({
        url: API_URL.user(EnumUserPaths.UPDATE),
        method: 'PUT',
      });

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error.message;
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }
}

export const userService = new UserService();
