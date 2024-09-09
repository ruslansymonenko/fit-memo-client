import { IExerciseType } from '@/types/data-types/exercise-type.interface';
import { IMeasure } from '@/types/data-types/measure.interface';

export interface IExerciseTypeResponse extends IExerciseType {
  measure: IMeasure;
}
