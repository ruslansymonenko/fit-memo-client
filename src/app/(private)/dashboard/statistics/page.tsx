import { Metadata } from 'next';
import { NO_INDEX_PAGE } from '@/consts/seo.consts';

export const metadata: Metadata = {
  title: 'Statistics',
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <div>Statistics</div>;
}
