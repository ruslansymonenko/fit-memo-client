import { FC } from 'react';
import ExerciseList from '@/components/app/exercise-list/ExerciseList';
import { IWorkoutResponse } from '@/types/server-response-types/workout-response.interface';

interface IWorkoutDataProps {
  workout: IWorkoutResponse | null;
}

const WorkoutData: FC<IWorkoutDataProps> = ({ workout }) => {
  return (
    <div className="mt-4">
      {workout ? <ExerciseList exercises={workout.exercises} /> : 'No data'}
    </div>
  );
};

export default WorkoutData;
