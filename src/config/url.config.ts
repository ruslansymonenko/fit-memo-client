export const APP_URL = process.env.APP_URL as string;

export const PUBLIC_URL = {
  root: (url = '') => `${url ? url : ''}`,

  home: () => PUBLIC_URL.root('/'),
  register: () => PUBLIC_URL.root('/auth/register'),
  login: () => PUBLIC_URL.root('/auth/login'),
  features: () => PUBLIC_URL.root('/features'),
  faq: () => PUBLIC_URL.root('/faq'),
  pricing: () => PUBLIC_URL.root('/pricing'),
};

export const PRIVATE_URL = {
  root: (url = '') => `${APP_URL}${url ? url : ''}`,

  home: () => PUBLIC_URL.root(`/main`),
};

export const ADMIN_URL = {
  root: (url = '') => `${APP_URL}${url ? url : ''}`,
};
