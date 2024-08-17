import { IAuthForm, IAuthResponse } from '@/types/auth.interface';
import { axiosPublic } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';
import { removeTokenFromStorage, saveAccessToken } from '@/services/auth/auth-token.service';

enum EnumAuthPaths {
  LOGIN = 'login',
  REGISTER = 'register',
  ACCESS_TOKEN = 'access-token',
  LOGOUT = 'logout',
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
      console.error(error);
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
      console.error(error);
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
      console.error(error);
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
      console.error(error);
    }
  }
}

export const authService = new AuthService();
