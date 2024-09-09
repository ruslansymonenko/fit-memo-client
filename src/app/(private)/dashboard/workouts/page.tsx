import { Metadata } from 'next';
import { NO_INDEX_PAGE } from '@/consts/seo.consts';
import Workouts from '@/screens/workouts/Workouts';

export const metadata: Metadata = {
  title: 'Workouts',
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <div className="w-full">
      <Workouts />
    </div>
  );
}
