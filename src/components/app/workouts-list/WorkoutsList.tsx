'use client';

import { FC, useEffect } from 'react';
import WorkoutsListItem from '@/components/app/workouts-list-item/WorkoutsListItem';
import { useGetAllWorkouts } from '@/hooks/workout/useGetWorkouts';
import Loader from '@/components/common/loader/Loader';

const WorkoutsList: FC = () => {
  const { data, isLoading, error } = useGetAllWorkouts();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <h3 className="font-bold mb-2">Latest workouts</h3>
      <ul className="flex flex-col">
        {isLoading ? <Loader /> : data?.data.map((workout) => <WorkoutsListItem data={workout} />)}
      </ul>
    </div>
  );
};

export default WorkoutsList;
