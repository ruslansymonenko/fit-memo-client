'use client';

import { FC, useEffect, useState } from 'react';
import { useGetWorkoutById } from '@/hooks/workout/useGetWorkouts';
import { IWorkoutResponse } from '@/types/server-response-types/workout-response.interface';
import WorkoutHeader from '@/components/app/workout-header/WorkoutHeader';
import WorkoutData from '@/components/app/workout-data/WorkoutData';

interface IWorkoutProps {
  id: number;
}

const Workout: FC<IWorkoutProps> = ({ id }) => {
  const { data, isLoading, error } = useGetWorkoutById(id);
  const [workoutData, setWorkoutData] = useState<IWorkoutResponse | null>(null);

  useEffect(() => {
    if (data) {
      setWorkoutData(data.data);
    }
  }, [data]);

  return (
    <section className="py-4 px-8">
      <WorkoutHeader workout={workoutData} />
      <WorkoutData workout={workoutData} />
    </section>
  );
};

export default Workout;
