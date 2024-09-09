import { FC } from 'react';
import { IExerciseResponse } from '@/types/server-response-types/exercise-response.interface';
import ExerciseListItem from '@/components/app/exercise-list-item/ExerciseListItem';

interface IExampleListProps {
  exercises: IExerciseResponse[];
}

const ExerciseList: FC<IExampleListProps> = ({ exercises }) => {
  return (
    <ul>
      {exercises.map((item, index) => (
        <ExerciseListItem exercise={item} exerciseNumber={index + 1} />
      ))}
    </ul>
  );
};

export default ExerciseList;
