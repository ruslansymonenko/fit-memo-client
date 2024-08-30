import { FC } from 'react';
import { IWorkoutResponse } from '@/types/server-response-types/workout-response.interface';

interface IWorkoutsListItemProps {
  data: IWorkoutResponse;
}

const WorkoutsListItem: FC<IWorkoutsListItemProps> = ({ data }) => {
  return (
    <li className="my-1 h-16 py-4 px-2 shadow-lg rounded-lg">
      <div className="p-2">{data.name}</div>
    </li>
  );
};

export default WorkoutsListItem;
