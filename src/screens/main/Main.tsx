import { FC } from 'react';
import Greeting from '@/components/app/greeting/Greeting';
import WorkoutsList from '@/components/app/workouts-list/WorkoutsList';

const Main: FC = () => {
  return (
    <section className="py-4 px-8">
      <Greeting userName="User" />
      <WorkoutsList />
    </section>
  );
};

export default Main;
