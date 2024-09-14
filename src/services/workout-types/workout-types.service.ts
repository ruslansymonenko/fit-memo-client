import { axiosPrivate } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';
import { IWorkoutTypeResponse } from '@/types/server-response-types/workoutType-response-type';

enum EnumWorkoutTypesPaths {
  CREATE = '/create',
  GET_ALL = '/get-all',
  GET_BY_ID = '/by-id',
  UPDATE = '/update',
  DELETE = '/delete',
}

interface ICreateWorkoutType {
  name: string;
  iconId?: number;
}

interface IUpdateWorkoutType {
  name?: string;
  isFavorite?: boolean;
  iconId?: number;
}

class WorkoutTypesService {
  async create(data: ICreateWorkoutType) {
    try {
      const response = await axiosPrivate<IWorkoutTypeResponse>({
        url: API_URL.workoutType(EnumWorkoutTypesPaths.CREATE),
        method: 'POST',
        data: data,
      });

      return response;
    } catch (error: any) {
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async getAll() {
    try {
      const response = await axiosPrivate<IWorkoutTypeResponse[]>({
        url: API_URL.workoutType(EnumWorkoutTypesPaths.GET_ALL),
        method: 'GET',
      });

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
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
        throw error;
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async update(id: number, data: IUpdateWorkoutType) {
    try {
      const response = await axiosPrivate<IWorkoutTypeResponse>({
        url: API_URL.workoutType(`${EnumWorkoutTypesPaths.UPDATE}/${id}`),
        method: 'PUT',
        data: data,
      });

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async delete(id: number) {
    try {
      const response = await axiosPrivate<IWorkoutTypeResponse>({
        url: API_URL.workoutType(`${EnumWorkoutTypesPaths.DELETE}/${id}`),
        method: 'DELETE',
      });

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

export const workoutTypesService = new WorkoutTypesService();
