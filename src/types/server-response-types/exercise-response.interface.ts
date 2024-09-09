import { IExercise } from '@/types/data-types/exercise.interface';
import { ISetResponse } from '@/types/server-response-types/set-response.interface';
import { IExerciseTypeResponse } from '@/types/server-response-types/exercise-type-response';

export interface IExerciseResponse extends IExercise {
  exerciseType: IExerciseTypeResponse;
  sets: ISetResponse[];
}
