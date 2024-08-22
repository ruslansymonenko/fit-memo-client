import { IAuthForm, IAuthResponse } from '@/types/data-types/auth.interface';
import { axiosPublic } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';
import { removeTokenFromStorage, saveAccessToken } from '@/services/auth/auth-token.service';
import { IServiceResponse } from '@/types/app-types/service.interface';
import { AxiosError } from 'axios';

enum EnumAuthPaths {
  LOGIN = '/login',
  REGISTER = '/register',
  ACCESS_TOKEN = '/access-token',
  LOGOUT = '/logout',
}

class AuthService {
  sendStatus<T>(status: boolean, message: string, data: T): IServiceResponse<T> {
    return {
      status: status,
      message: message,
      data: data,
    };
  }

  async register(data: IAuthForm) {
    try {
      const response = await axiosPublic<IAuthResponse>({
        url: API_URL.auth(EnumAuthPaths.REGISTER),
        method: 'POST',
        data,
      });

      if (response.data.accessToken) saveAccessToken(response.data.accessToken);

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error.message;
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async login(data: IAuthForm) {
    try {
      const response = await axiosPublic<IAuthResponse>({
        url: API_URL.auth(EnumAuthPaths.LOGIN),
        method: 'POST',
        data,
      });

      if (response.data.accessToken) saveAccessToken(response.data.accessToken);

      return response;
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        throw error;
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async getNewTokens() {
    try {
      const response = await axiosPublic<IAuthResponse>({
        url: API_URL.auth(EnumAuthPaths.ACCESS_TOKEN),
        method: 'POST',
      });

      if (response.data.accessToken) saveAccessToken(response.data.accessToken);

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async logout() {
    try {
      const response = await axiosPublic<boolean>({
        url: API_URL.auth(EnumAuthPaths.LOGOUT),
        method: 'POST',
      });

      if (response.data) removeTokenFromStorage();

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }
}

export const authService = new AuthService();
