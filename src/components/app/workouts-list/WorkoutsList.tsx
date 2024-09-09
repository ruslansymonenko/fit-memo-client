'use client';

import { FC } from 'react';
import WorkoutsListItem from '@/components/app/workouts-list-item/WorkoutsListItem';
import Loader from '@/components/common/loader/Loader';
import { IWorkoutResponse } from '@/types/server-response-types/workout-response.interface';

interface IWorkoutsListProps {
  data: IWorkoutResponse[];
  isLoading: boolean;
}

const WorkoutsList: FC<IWorkoutsListProps> = ({ data, isLoading }) => {
  return (
    <div>
      <ul className="flex flex-col">
        {isLoading ? <Loader /> : data.map((workout) => <WorkoutsListItem data={workout} />)}
      </ul>
    </div>
  );
};

export default WorkoutsList;
