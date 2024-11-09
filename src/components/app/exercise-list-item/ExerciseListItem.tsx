import { FC } from 'react';
import { IExerciseResponse } from '@/types/server-response-types/exercise-response.interface';
import SetList from '@/components/app/set-list/SetList';

interface IProps {
  exercise: IExerciseResponse;
  exerciseNumber: number;
}

const ExerciseListItem: FC<IProps> = ({ exercise, exerciseNumber }) => {
  return (
    <li className="border shadow-sm my-4 p-4 rounded-md">
      <div className="flex mb-4">
        <h5 className="underline-offset-4 mr-6">Exercise: {exerciseNumber}</h5>
        <span className="font-bold text-secondary">{exercise.exerciseType.name}</span>
      </div>
      <SetList sets={exercise.sets} measure={exercise.exerciseType.measure} />
    </li>
  );
};

export default ExerciseListItem;
