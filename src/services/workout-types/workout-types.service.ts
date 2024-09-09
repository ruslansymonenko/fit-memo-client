import { axiosPrivate } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';
import { IWorkoutTypeResponse } from '@/types/server-response-types/workoutType-response-type';

enum EnumWorkoutTypesPaths {
  GET_ALL = '/get-all',
  GET_BY_ID = '/by-id',
}

class WorkoutTypesService {
  async getAll() {
    try {
      const response = await axiosPrivate<IWorkoutTypeResponse[]>({
        url: API_URL.workoutType(EnumWorkoutTypesPaths.GET_ALL),
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
      const response = await axiosPrivate<IWorkoutTypeResponse>({
        url: API_URL.workoutType(`${EnumWorkoutTypesPaths.GET_BY_ID}/${id}`),
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

export const workoutTypesService = new WorkoutTypesService();
