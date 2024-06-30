import { Metadata } from 'next';
import Login from '@/screens/auth/login/Login';

export const metadata: Metadata = {
  title: 'Auth Page',
};

export default function Page() {
  return (
    <main className="mh-pageHeight">
      <Login />
    </main>
  );
}
