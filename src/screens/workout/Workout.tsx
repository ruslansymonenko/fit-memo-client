'use client';

import { FC, useEffect, useState } from 'react';
import { useGetWorkoutById } from '@/hooks/workout/useGetWorkouts';
import { IWorkoutResponse } from '@/types/server-response-types/workout-response.interface';
import WorkoutHeader from '@/components/app/workout-header/WorkoutHeader';
import WorkoutData from '@/components/app/workout-data/WorkoutData';
import AddButton from '@/components/common/add-button/AddButton';
import { openAddNewElementModal } from '@/store/slices/modals/addNewElementModalSlice';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';

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
