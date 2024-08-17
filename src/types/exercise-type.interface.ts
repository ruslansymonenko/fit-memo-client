export interface IExerciseType {
  id: number;
  createdAt: number;
  updatedAt: number;
  name: string;
  description: string;
  isFavorite: boolean;
  userId: number;
  measureId: number;
}
