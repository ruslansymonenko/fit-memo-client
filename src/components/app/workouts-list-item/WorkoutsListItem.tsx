import { FC } from 'react';
import { IWorkout } from '@/types/data-types/workout.interface';

interface IWorkoutsListItemProps {
  data: IWorkout;
}

const WorkoutsListItem: FC = () => {
  return (
    <li className="my-1 h-16 py-4 px-2 shadow-lg rounded-lg">
      <div className="p-2">Workout</div>
    </li>
  );
};

export default WorkoutsListItem;
