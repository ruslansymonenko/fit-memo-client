import { FC } from 'react';
import WorkoutsListItem from '@/components/app/workouts-list-item/WorkoutsListItem';

const WorkoutsList: FC = () => {
  return (
    <div>
      <h3 className="font-bold mb-2">Latest workouts</h3>
      <ul className="flex flex-col">
        <WorkoutsListItem />
        <WorkoutsListItem />
        <WorkoutsListItem />
      </ul>
    </div>
  );
};

export default WorkoutsList;
