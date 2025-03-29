import { FC } from 'react';
import { IExerciseResponse } from '@/types/server-response-types/exercise-response.interface';
import ExerciseListItem from '@/components/app/exercise-list-item/ExerciseListItem';
import cn from 'clsx';

interface IProps {
  exercises: IExerciseResponse[];
  className?: string;
}

const ExerciseList: FC<IProps> = ({ exercises, className }) => {
  return (
    <ul className={cn('', className)}>
      {exercises.map((item, index) => (
        <ExerciseListItem key={item.id} exercise={item} exerciseNumber={index + 1} />
      ))}
    </ul>
  );
};

export default ExerciseList;
