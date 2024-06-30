import { Metadata } from 'next';
import Main from '@/screens/main/Main';

export const metadata: Metadata = {
  title: 'Main Page',
};

export default function Page() {
  return (
    <div>
      <Main />
    </div>
  );
}
