import { Metadata } from 'next';
import Main from '@/screens/main/Main';
import { NO_INDEX_PAGE } from '@/consts/seo.consts';

export const metadata: Metadata = {
  title: 'Main Page',
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <div className="w-9/12">
      <Main />
    </div>
  );
}
