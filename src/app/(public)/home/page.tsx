import { Metadata } from 'next';
import Navbar from '@/components/presentation/navbar/Navbar';
import Presentation from '@/screens/presentation/Presentation';
import Footer from '@/components/presentation/footer/Footer';

export const metadata: Metadata = {
  title: 'Home Page',
};

export default function Page() {
  return (
    <div className="h-full">
      <Navbar />
      <Presentation />
      <Footer />
    </div>
  );
}
