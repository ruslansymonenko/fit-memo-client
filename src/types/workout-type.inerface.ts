export interface IWorkoutType {
  id: number;
  createdAt: number;
  updatedAt: number;
  name: string;
  isFavorite: boolean;
  userId: number;
  workoutTypeIconId: number;
}
