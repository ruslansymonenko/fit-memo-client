import { FC } from 'react';
import { IWorkoutTypeResponse } from '@/types/server-response-types/workoutType-response-type';
import WorkoutTypesListItem from '@/components/app/workout-types-list-item/WorkoutTypesListItem';

interface IWorkoutTypesListProps {
  workoutTypes: IWorkoutTypeResponse[];
}

const WorkoutTypesList: FC<IWorkoutTypesListProps> = ({ workoutTypes }) => {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {workoutTypes.map((type) => (
        <WorkoutTypesListItem workoutType={type} />
      ))}
    </ul>
  );
};

export default WorkoutTypesList;
