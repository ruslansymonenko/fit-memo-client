import { IExercise } from '@/types/data-types/exercise.interface';
import { ISetResponse } from '@/types/server-response-types/set-response.interface';
import { IExerciseType } from '@/types/data-types/exercise-type.interface';

export interface IExerciseResponse extends IExercise {
  exerciseType: IExerciseType;
  sets: ISetResponse[];
}
