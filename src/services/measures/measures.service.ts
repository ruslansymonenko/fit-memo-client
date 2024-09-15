import { axiosPrivate } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';
import { EnumMeasuresTypes, IMeasure } from '@/types/data-types/measure.interface';

enum EnumRepeatPaths {
  CREATE = '/create',
  GET_ALL = '/get-all',
  GET_BY_ID = '/by-id',
  UPDATE = '/update',
  DELETE = '/delete',
}

interface ICreateMeasure {
  type: EnumMeasuresTypes;
}

interface IUpdateMeasure {
  type: EnumMeasuresTypes;
}

class MeasureService {
  async create(data: ICreateMeasure) {
    try {
      const response = await axiosPrivate<IMeasure>({
        url: API_URL.measure(EnumRepeatPaths.CREATE),
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

  async getAll() {
    try {
      const response = await axiosPrivate<IMeasure[]>({
        url: API_URL.measure(`${EnumRepeatPaths.GET_ALL}`),
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
      const response = await axiosPrivate<IMeasure>({
        url: API_URL.measure(`${EnumRepeatPaths.GET_BY_ID}/${id}`),
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

  async update(id: number, data: IUpdateMeasure) {
    try {
      const response = await axiosPrivate<IMeasure>({
        url: API_URL.measure(`${EnumRepeatPaths.UPDATE}/${id}`),
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
      const response = await axiosPrivate<IMeasure>({
        url: API_URL.measure(`${EnumRepeatPaths.DELETE}/${id}`),
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

export const measureService = new MeasureService();
