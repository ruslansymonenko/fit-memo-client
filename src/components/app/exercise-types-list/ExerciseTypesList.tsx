import { FC } from 'react';
import ExerciseTypesListItem from '@/components/app/exercise-types-list-item/ExerciseTypesListItem';
import { IExerciseTypeResponse } from '@/types/server-response-types/exercise-type-response';

interface IExerciseTypesListProps {
  exerciseTypes: IExerciseTypeResponse[];
}

const ExerciseTypesList: FC<IExerciseTypesListProps> = ({ exerciseTypes }) => {
  return (
    <ul>
      {exerciseTypes.map((item, index) => (
        <ExerciseTypesListItem exerciseType={item} indexNumber={index + 1} />
      ))}
    </ul>
  );
};

export default ExerciseTypesList;
