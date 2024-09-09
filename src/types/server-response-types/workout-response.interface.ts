import { IWorkout } from '@/types/data-types/workout.interface';
import { ITag } from '@/types/data-types/tag.interface';
import { IWorkoutTypeResponse } from '@/types/server-response-types/workoutType-response-type';
import { IExerciseResponse } from '@/types/server-response-types/exercise-response.interface';

export interface IWorkoutResponse extends IWorkout {
  tags: ITag[];
  workoutType: IWorkoutTypeResponse;
  exercises: IExerciseResponse[];
}
