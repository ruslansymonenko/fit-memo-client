import { Metadata } from 'next';
import Presentation from '@/screens/presentation/Presentation';
import Navbar from '@/components/presentation/navbar/Navbar';
import Footer from '@/components/presentation/footer/Footer';

export const metadata: Metadata = {
  title: 'FitMemo - Fitness Journal',
  description: 'FitMemo - Fitness Journal',
};

export default function Home() {
  return (
    <div className="h-full">
      <Navbar />
      <Presentation />
      <Footer />
    </div>
  );
}
