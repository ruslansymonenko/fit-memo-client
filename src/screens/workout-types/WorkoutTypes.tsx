'use client';

import { FC } from 'react';
import WorkoutTypesList from '@/components/app/workout-types-list/WorkoutTypesList';
import { useGetAllWorkoutsTypes } from '@/hooks/workout-types/useGetWokoutsTypes';
import Loader from '@/components/common/loader/Loader';
import AddButton from '@/components/common/add-button/AddButton';

const WorkoutTypes: FC = () => {
  const { data, isLoading, error } = useGetAllWorkoutsTypes();

  return (
    <section className="py-4 px-8 relative h-full">
      <h3 className="font-bold mb-2">Workout types</h3>
      {isLoading ? <Loader /> : ''}
      {data ? <WorkoutTypesList workoutTypes={data.data} /> : ''}
      <AddButton />
    </section>
  );
};

export default WorkoutTypes;
