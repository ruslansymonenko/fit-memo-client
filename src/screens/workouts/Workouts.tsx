'use client';

import { FC, useEffect, useState } from 'react';
import { useGetAllWorkouts } from '@/hooks/workout/useGetWorkouts';
import { IWorkoutResponse } from '@/types/server-response-types/workout-response.interface';
import ErrorBlock from '@/components/common/error-block/ErrorBlock';
import WorkoutsList from '@/components/app/workouts-list/WorkoutsList';

const Workouts: FC = () => {
  const { data, isLoading, error } = useGetAllWorkouts();
  const [workoutsData, setWorkoutsData] = useState<IWorkoutResponse[]>([]);

  useEffect(() => {
    if (data) {
      const workouts = data.data;

      if (workouts.length > 2) {
        setWorkoutsData(workouts.slice(0, 2));
      } else {
        setWorkoutsData(workouts);
      }
    }
  }, [data]);

  return (
    <section className="py-4 px-8">
      <h3 className="font-bold mb-2">Your workouts</h3>
      {error ? <ErrorBlock /> : <WorkoutsList data={workoutsData} isLoading={isLoading} />}
    </section>
  );
};

export default Workouts;
