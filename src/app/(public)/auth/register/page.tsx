import { Metadata } from 'next';
import Register from '@/screens/auth/register/Register';

export const metadata: Metadata = {
  title: 'Registration',
};

export default function Page() {
  return (
    <main className="mh-pageHeight">
      <Register />
    </main>
  );
}
