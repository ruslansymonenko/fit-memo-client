import { Metadata } from 'next';
import Presentation from '@/screens/presentation/Presentation';

export const metadata: Metadata = {
  title: 'FitMemo - Fitness Journal',
  description: 'FitMemo - Fitness Journal',
};

export default function Home() {
  return (
    <div className="page screen_container">
      <Presentation />
    </div>
  );
}
