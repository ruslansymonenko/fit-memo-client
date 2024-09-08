import { FC } from 'react';
import { IExerciseResponse } from '@/types/server-response-types/exercise-response.interface';
import SetList from '@/components/app/set-list/SetList';

interface IExerciseListItemProps {
  exercise: IExerciseResponse;
  exerciseNumber: number;
}

const ExerciseListItem: FC<IExerciseListItemProps> = ({ exercise, exerciseNumber }) => {
  return (
    <li className="shadow-lg min-h-32 p-4 rounded-md">
      <div className="flex mb-2">
        <h5 className="underline-offset-4 underline mr-6">Exercise: {exerciseNumber}</h5>
        <span className="font-bold text-secondary">{exercise.exerciseType.name}</span>
      </div>
      <SetList sets={exercise.sets} />
    </li>
  );
};

export default ExerciseListItem;
