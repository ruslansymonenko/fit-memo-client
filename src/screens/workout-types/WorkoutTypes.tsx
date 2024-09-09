'use client';

import { FC } from 'react';
import WorkoutTypesList from '@/components/app/workout-types-list/WorkoutTypesList';
import { useGetAllWorkoutsTypes } from '@/hooks/workout-types/useGetWokoutsTypes';
import Loader from '@/components/common/loader/Loader';

const WorkoutTypes: FC = () => {
  const { data, isLoading, error } = useGetAllWorkoutsTypes();

  return (
    <section className="py-4 px-8">
      <h3 className="font-bold mb-2">Workout types</h3>
      {isLoading ? <Loader /> : ''}
      {data ? <WorkoutTypesList workoutTypes={data.data} /> : ''}
    </section>
  );
};

export default WorkoutTypes;
