import { IAuthForm } from '@/types/data-types/auth.interface';
import { axiosPublic } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';
import { removeTokenFromStorage, saveAccessToken } from '@/services/auth/auth-token.service';
import { AxiosError } from 'axios';
import { IAuthResponse } from '@/types/server-response-types/auth-response.interface';

enum EnumAuthPaths {
  LOGIN = '/login',
  REGISTER = '/register',
  ACCESS_TOKEN = '/access-token',
  LOGOUT = '/logout',
}

class AuthService {
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

      console.log(response);

      if (response.data.accessToken) {
        saveAccessToken(response.data.accessToken);
      } else {
        await this.logout();
      }

      return response;
    } catch (error) {
      await this.logout();
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
