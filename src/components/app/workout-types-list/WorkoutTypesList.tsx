import { FC } from 'react';
import { IWorkoutTypeResponse } from '@/types/server-response-types/workoutType-response-type';
import WorkoutTypesListItem from '@/components/app/workout-types-list-item/WorkoutTypesListItem';

interface IProps {
  workoutTypes: IWorkoutTypeResponse[];
}

const WorkoutTypesList: FC<IProps> = ({ workoutTypes }) => {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {workoutTypes.map((type) => (
        <WorkoutTypesListItem workoutType={type} key={type.id} />
      ))}
    </ul>
  );
};

export default WorkoutTypesList;
