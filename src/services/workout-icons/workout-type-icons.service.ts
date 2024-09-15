import { axiosPrivate } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';
import { IWorkoutTypeIcons } from '@/types/data-types/workout-type-icons.interface';

enum EnumWorkoutTypesPaths {
  CREATE = '/create',
  GET_ALL = '/get-all',
  GET_BY_ID = '/by-id',
  UPDATE = '/update',
  DELETE = '/delete',
}

interface ICreateWorkoutTypeIcon {
  icon: File;
}

interface IUpdateWorkoutTypeIcon {
  icon: File;
}

class WorkoutTypeIconsService {
  async create(data: ICreateWorkoutTypeIcon) {
    try {
      const formData = new FormData();
      formData.append('icon', data.icon);

      const response = await axiosPrivate<IWorkoutTypeIcons>({
        url: API_URL.workoutTypeIcons(EnumWorkoutTypesPaths.CREATE),
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
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
      const response = await axiosPrivate<IWorkoutTypeIcons[]>({
        url: API_URL.workoutTypeIcons(EnumWorkoutTypesPaths.GET_ALL),
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
      const response = await axiosPrivate<IWorkoutTypeIcons>({
        url: API_URL.workoutTypeIcons(`${EnumWorkoutTypesPaths.GET_BY_ID}/${id}`),
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

  async update(id: number, data: IUpdateWorkoutTypeIcon) {
    try {
      const formData = new FormData();
      formData.append('icon', data.icon);

      const response = await axiosPrivate<IWorkoutTypeIcons>({
        url: API_URL.workoutTypeIcons(`${EnumWorkoutTypesPaths.UPDATE}/${id}`),
        method: 'PUT',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
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
      const response = await axiosPrivate<IWorkoutTypeIcons>({
        url: API_URL.workoutTypeIcons(`${EnumWorkoutTypesPaths.DELETE}/${id}`),
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

export const workoutTypeIconsService = new WorkoutTypeIconsService();
