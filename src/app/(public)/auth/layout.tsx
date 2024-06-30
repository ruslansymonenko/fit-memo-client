import Navbar from '@/components/presentation/navbar/Navbar';
import Footer from '@/components/presentation/footer/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
