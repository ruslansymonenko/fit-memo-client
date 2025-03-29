import { axiosPrivate } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';
import { IWorkoutResponse } from '@/types/server-response-types/workout-response.interface';
import { EnumWorkoutStatus } from '@/types/data-types/workout.interface';
import { TypeToggleTags } from '@/types/data-types/tag.interface';

enum EnumWorkoutPaths {
  CREATE = '/create',
  GET_ALL = '/get-all',
  GET_BY_ID = '/by-id',
  TOGGLE_TAGS = 'toggle-tags',
  UPDATE = '/update',
  DELETE = '/delete',
}

interface ICreateWorkout {
  name: string;
  date?: string;
  status?: EnumWorkoutStatus;
  duration?: number; //in ms
  workoutTypeId: number;
}

export interface IUpdateWorkout {
  name?: string;
  isFavorite?: boolean;
  date?: Date;
  status?: EnumWorkoutStatus;
  duration?: number; //in ms
  workoutTypeId?: number;
  tagIds?: number[];
}

interface IToggleTags {
  tagsIds: number[];
}

class WorkoutService {
  async create(data: ICreateWorkout) {
    try {
      const response = await axiosPrivate<IWorkoutResponse>({
        url: API_URL.workout(EnumWorkoutPaths.CREATE),
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

  async update(id: number, data: IUpdateWorkout) {
    try {
      const response = await axiosPrivate<IWorkoutResponse>({
        url: API_URL.workout(`${EnumWorkoutPaths.UPDATE}/${id}`),
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

  async toggleTags(id: number, type: TypeToggleTags, data: IToggleTags) {
    try {
      const response = await axiosPrivate<IWorkoutResponse>({
        url: API_URL.workout(`${EnumWorkoutPaths.UPDATE}/${id}?type=${type}`),
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
      const response = await axiosPrivate<IWorkoutResponse>({
        url: API_URL.workout(`${EnumWorkoutPaths.DELETE}/${id}`),
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

export const workoutService = new WorkoutService();
