import { IWorkoutType } from '@/types/data-types/workout-type.inerface';
import { IWorkoutTypeIcons } from '@/types/data-types/workout-type-icons.interface';

export interface IWorkoutTypeResponse extends IWorkoutType {
  workoutTypeIcon: IWorkoutTypeIcons;
}
