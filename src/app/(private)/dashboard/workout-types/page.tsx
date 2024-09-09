import { Metadata } from 'next';
import { NO_INDEX_PAGE } from '@/consts/seo.consts';
import WorkoutTypes from '@/screens/workout-types/WorkoutTypes';

export const metadata: Metadata = {
  title: 'Workout Types',
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <div className="w-full">
      <WorkoutTypes />
    </div>
  );
}
