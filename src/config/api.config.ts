export const SERVER_URL = process.env.SERVER_URL as string;

export const API_URL = {
  root: (url = '') => `${url ? url : ''}`,

  auth: (url = '') => API_URL.root(`/auth${url}`),
  user: (url = '') => API_URL.root(`/user${url}`),
  userData: (url = '') => API_URL.root(`/user-data${url}`),

  measure: (url = '') => API_URL.root(`/measure${url}`),
  tags: (url = '') => API_URL.root(`/tags${url}`),

  workout: (url = '') => API_URL.root(`/workout${url}`),
  workoutType: (url = '') => API_URL.root(`/workout-type${url}`),
  workoutTypeIcons: (url = '') => API_URL.root(`/workout-type-icons${url}`),
  exerciseType: (url = '') => API_URL.root(`/exercise-type${url}`),
  exercise: (url = '') => API_URL.root(`/exercise${url}`),
  set: (url = '') => API_URL.root(`/set${url}`),
  repeat: (url = '') => API_URL.root(`/repeat${url}`),
};
