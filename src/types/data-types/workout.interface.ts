export enum EnumWorkoutStatus {
  NEW = 'NEW',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface IWorkout {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  date: string;
  status: EnumWorkoutStatus;
  duration: number;
  isFavorite: boolean;
  userId: number;
  workoutTypeId: number;
}
