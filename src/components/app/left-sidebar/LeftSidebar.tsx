import { FC } from 'react';
import styles from './LeftSidebar.module.scss';

const LeftSidebar: FC = () => {
  return (
    <div className="w-2/12 shadow-md h-screen px-4 py-8">
      <h1 className="text-primary text-3xl font-bold">FitMemo</h1>
      <nav>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
      <div>Controllers</div>
    </div>
  );
};

export default LeftSidebar;
