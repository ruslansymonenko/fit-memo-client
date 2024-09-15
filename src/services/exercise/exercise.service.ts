import { axiosPrivate } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';
import { IExerciseResponse } from '@/types/server-response-types/exercise-response.interface';

enum EnumExercisePaths {
  CREATE = '/create',
  GET_BY_ID = '/by-id',
  GET_BY_WORKOUT_ID = '/get-by-workout',
  UPDATE = '/update',
  DELETE = '/delete',
}

interface ICreateExercise {
  exerciseId: number;
}

interface IUpdateExercise {
  exerciseId: number;
}

class ExerciseService {
  async create(data: ICreateExercise) {
    try {
      const response = await axiosPrivate<IExerciseResponse>({
        url: API_URL.exercise(EnumExercisePaths.CREATE),
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
      const response = await axiosPrivate<IExerciseResponse>({
        url: API_URL.exercise(`${EnumExercisePaths.GET_BY_ID}/${id}`),
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

  async getByWorkoutId(id: number) {
    try {
      const response = await axiosPrivate<IExerciseResponse>({
        url: API_URL.exercise(`${EnumExercisePaths.GET_BY_WORKOUT_ID}/${id}`),
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
      const response = await axiosPrivate<IExerciseResponse>({
        url: API_URL.exercise(`${EnumExercisePaths.UPDATE}/${id}`),
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
      const response = await axiosPrivate<IExerciseResponse>({
        url: API_URL.exercise(`${EnumExercisePaths.DELETE}/${id}`),
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

export const exerciseService = new ExerciseService();
