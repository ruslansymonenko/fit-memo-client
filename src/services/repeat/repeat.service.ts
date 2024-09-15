import { axiosPrivate } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';
import { IRepeat } from '@/types/data-types/repeat.interface';

enum EnumRepeatPaths {
  CREATE = '/create',
  GET_BY_ID = '/by-id',
  GET_BY_SET_ID = '/get-by-set',
  UPDATE = '/update',
  DELETE = '/delete',
}

interface ICreateRepeat {
  quantity?: number;
  value: number;
  setId: number;
}

interface IUpdateRepeat {
  quantity?: number;
  value?: number;
}

class RepeatService {
  async create(data: ICreateRepeat) {
    try {
      const response = await axiosPrivate<IRepeat>({
        url: API_URL.repeat(EnumRepeatPaths.CREATE),
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
      const response = await axiosPrivate<IRepeat>({
        url: API_URL.repeat(`${EnumRepeatPaths.GET_BY_ID}/${id}`),
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

  async getBySetId(id: number) {
    try {
      const response = await axiosPrivate<IRepeat>({
        url: API_URL.repeat(`${EnumRepeatPaths.GET_BY_SET_ID}/${id}`),
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

  async update(id: number, data: IUpdateRepeat) {
    try {
      const response = await axiosPrivate<IRepeat>({
        url: API_URL.repeat(`${EnumRepeatPaths.UPDATE}/${id}`),
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
      const response = await axiosPrivate<IRepeat>({
        url: API_URL.repeat(`${EnumRepeatPaths.DELETE}/${id}`),
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

export const repeatService = new RepeatService();
