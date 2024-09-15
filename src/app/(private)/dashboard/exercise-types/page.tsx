import { Metadata } from 'next';
import { NO_INDEX_PAGE } from '@/consts/seo.consts';
import ExerciseTypes from '@/screens/exercise-types/ExerciseTypes';

export const metadata: Metadata = {
  title: 'Exercises',
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <div className="w-full h-full">
      <ExerciseTypes />
    </div>
  );
}
