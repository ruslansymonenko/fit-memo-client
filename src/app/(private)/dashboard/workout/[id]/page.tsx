import { Metadata } from 'next';
import { NO_INDEX_PAGE } from '@/consts/seo.consts';
import Workout from '@/screens/workout/Workout';

export const metadata: Metadata = {
  title: 'Workout',
  ...NO_INDEX_PAGE,
};

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="w-full">
      <Workout id={parseInt(params.id)} />
    </div>
  );
}
