'use client';

import { FC, useEffect, useState } from 'react';
import Greeting from '@/components/app/greeting/Greeting';
import WorkoutsList from '@/components/app/workouts-list/WorkoutsList';
import { useGetAllWorkouts } from '@/hooks/workout/useGetWorkouts';
import { IWorkoutResponse } from '@/types/server-response-types/workout-response.interface';
import ErrorBlock from '@/components/common/error-block/ErrorBlock';

const Main: FC = () => {
  const { data, isLoading, error } = useGetAllWorkouts();
  const [workoutsData, setWorkoutsData] = useState<IWorkoutResponse[]>([]);

  useEffect(() => {
    if (data) {
      const workouts = data.data;

      if (workouts.length > 2) {
        setWorkoutsData(workouts.slice(0, 3));
      } else {
        setWorkoutsData(workouts);
      }
    }
  }, [data]);

  return (
    <section className="py-4 px-8">
      <Greeting />
      <h3 className="font-bold mb-2">Latest workouts</h3>
      {error ? <ErrorBlock /> : <WorkoutsList data={workoutsData} isLoading={isLoading} />}
    </section>
  );
};

export default Main;
