export const APP_URL = process.env.APP_URL as string;

export const PUBLIC_URL = {
  root: (url = '') => `${url ? url : ''}`,

  main: () => PUBLIC_URL.root('/'),
  home: () => PUBLIC_URL.root('/home'),
  register: () => PUBLIC_URL.root('/auth/register'),
  login: () => PUBLIC_URL.root('/auth/login'),
  features: () => PUBLIC_URL.root('/features'),
  faq: () => PUBLIC_URL.root('/faq'),
  pricing: () => PUBLIC_URL.root('/pricing'),
};

export const PRIVATE_URL = {
  root: (url: string = '') => `${APP_URL}${url ? url : ''}`,

  home: () => PUBLIC_URL.root(`/dashboard`),
  workouts: () => PUBLIC_URL.root(`/dashboard/workouts`),
  workout: (id: string = '') => PUBLIC_URL.root(`/dashboard/workout/${id}`),
  workoutTypes: () => PUBLIC_URL.root(`/dashboard/workout-types`),
  exercises: () => PUBLIC_URL.root(`/dashboard/exercise-types`),
  statistics: () => PUBLIC_URL.root(`/dashboard/statistics`),
  tags: () => PUBLIC_URL.root(`/dashboard/tags`),
};

export const ADMIN_URL = {
  root: (url = '') => `${APP_URL}${url ? url : ''}`,
};
