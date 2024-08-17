import { FC } from 'react';
import styles from './LeftSidebar.module.scss';
import { appPages } from '@/components/app/left-sidebar/nav-data';
import Link from 'next/link';

const LeftSidebar: FC = () => {
  return (
    <div className="w-2/12 shadow-md h-screen px-4 py-8">
      <h1 className="text-primary text-3xl font-bold mb-6">FitMemo</h1>
      <nav className="mb-8">
        <ul>
          {appPages.map((page) => (
            <Link className="mb-4 block" href={page.pagePath} key={page.pagePath}>
              <li className="text-lg">{page.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <div>Controllers</div>
    </div>
  );
};

export default LeftSidebar;
