import { axiosPrivate } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';
import { IWorkoutResponse } from '@/types/server-response-types/workout-response.interface';

enum EnumWorkoutPaths {
  GET_ALL = '/get-all',
  GET_BY_ID = '/by-id',
}

class WorkoutService {
  async getAll() {
    try {
      const response = await axiosPrivate<IWorkoutResponse[]>({
        url: API_URL.workout(EnumWorkoutPaths.GET_ALL),
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

  async getById(id: number) {
    try {
      const response = await axiosPrivate<IWorkoutResponse>({
        url: API_URL.workout(`${EnumWorkoutPaths.GET_BY_ID}/${id}`),
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
}

export const workoutService = new WorkoutService();
