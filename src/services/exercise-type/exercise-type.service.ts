import { axiosPrivate } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';
import { IExerciseTypeResponse } from '@/types/server-response-types/exercise-type-response';

enum EnumExerciseTypePaths {
  CREATE = '/create',
  GET_ALL = '/get-all',
  GET_BY_ID = '/by-id',
  UPDATE = '/update',
  DELETE = '/delete',
}

interface ICreateExercise {
  name: string;
  description?: string;
  measureId: number;
}

interface IUpdateExercise {
  name?: string;
  description?: string;
  isFavorite?: boolean;
  measureId?: number;
}

class ExerciseTypeService {
  async create(data: ICreateExercise) {
    try {
      const response = await axiosPrivate<IExerciseTypeResponse>({
        url: API_URL.exerciseType(EnumExerciseTypePaths.CREATE),
        method: 'POST',
        data: data,
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
      const response = await axiosPrivate<IExerciseTypeResponse>({
        url: API_URL.exerciseType(`${EnumExerciseTypePaths.GET_BY_ID}/${id}`),
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

  async getAll() {
    try {
      const response = await axiosPrivate<IExerciseTypeResponse[]>({
        url: API_URL.exerciseType(`${EnumExerciseTypePaths.GET_ALL}`),
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

  async update(id: number, data: IUpdateExercise) {
    try {
      const response = await axiosPrivate<IExerciseTypeResponse>({
        url: API_URL.exerciseType(`${EnumExerciseTypePaths.UPDATE}/${id}`),
        method: 'PUT',
        data: data,
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

  async delete(id: number) {
    try {
      const response = await axiosPrivate<IExerciseTypeResponse>({
        url: API_URL.exerciseType(`${EnumExerciseTypePaths.DELETE}/${id}`),
        method: 'DELETE',
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

export const exerciseTypeService = new ExerciseTypeService();
