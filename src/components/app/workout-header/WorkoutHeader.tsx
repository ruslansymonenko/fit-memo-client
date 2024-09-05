import { FC } from 'react';
import { IWorkoutResponse } from '@/types/server-response-types/workout-response.interface';
import ErrorBlock from '@/components/common/error-block/ErrorBlock';

interface IWorkoutHeaderProps {
  workout: IWorkoutResponse | null;
}

const WorkoutHeader: FC<IWorkoutHeaderProps> = ({ workout }) => {
  return <div>{workout ? <h4>Workout №: {workout.id}</h4> : <ErrorBlock />}</div>;
};

export default WorkoutHeader;
