import { IWorkout } from '@/types/data-types/workout.interface';
import { ITag } from '@/types/data-types/tag.interface';
import { IWorkoutType } from '@/types/data-types/workout-type.inerface';

export interface IWorkoutResponse extends IWorkout {
  tags: ITag[];
  workoutType: IWorkoutType;
}
