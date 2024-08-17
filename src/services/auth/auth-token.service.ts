import Cookies from 'js-cookie';

export enum EnumTokens {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
}

export const getAccessToken = (): string | null => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);

  if (accessToken) return accessToken;

  return null;
};

export const saveAccessToken = (accessToken: string) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: process.env.APP_DOMAIN,
    sameSite: 'strict',
    expires: 1,
  });
};

export const removeTokenFromStorage = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN);
};
