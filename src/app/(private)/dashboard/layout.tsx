'use client';

import Sidebar from '@/components/app/sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import cn from 'clsx';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const isSidebarOpen: boolean = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <div className="flex align-center justify-between w-full h-full">
      <Sidebar isOpen={isSidebarOpen} />
      <main className={cn('transition-all w-10/12', isSidebarOpen ? 'w-9/12' : 'w-11/12')}>
        {children}
      </main>
    </div>
  );
}
