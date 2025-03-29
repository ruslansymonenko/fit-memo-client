import { axiosPrivate } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';
import { ISet } from '@/types/data-types/set.interface';
import { ISetResponse } from '@/types/server-response-types/set-response.interface';

enum EnumSetPaths {
  CREATE = '/create',
  GET_BY_ID = '/by-id',
  GET_BY_EXERCISE_ID = '/get-by-exercise',
  UPDATE = '/update',
  DELETE = '/delete',
}

interface ICreateSet {
  exerciseId: number;
}

interface IUpdateSet {
  exerciseId: number;
}

class SetService {
  async create(data: ICreateSet) {
    try {
      const response = await axiosPrivate<ISetResponse>({
        url: API_URL.set(EnumSetPaths.CREATE),
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
      const response = await axiosPrivate<ISetResponse>({
        url: API_URL.set(`${EnumSetPaths.GET_BY_ID}/${id}`),
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

  async getByExerciseId(id: number) {
    try {
      const response = await axiosPrivate<ISetResponse>({
        url: API_URL.set(`${EnumSetPaths.GET_BY_EXERCISE_ID}/${id}`),
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

  async update(id: number, data: IUpdateSet) {
    try {
      const response = await axiosPrivate<ISetResponse>({
        url: API_URL.set(`${EnumSetPaths.UPDATE}/${id}`),
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
      const response = await axiosPrivate<ISetResponse>({
        url: API_URL.set(`${EnumSetPaths.DELETE}/${id}`),
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

export const setService = new SetService();
