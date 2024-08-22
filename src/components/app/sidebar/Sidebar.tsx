'use client';

import { FC } from 'react';
import styles from './LeftSidebar.module.scss';
import Link from 'next/link';
import { appPages } from '@/components/app/sidebar/nav-data';
import { LogOut } from 'lucide-react';
import { authService } from '@/services/auth/auth.service';
import toast from 'react-hot-toast';
import { usePathname, useRouter } from 'next/navigation';
import { PUBLIC_URL } from '@/config/url.config';
import { ChevronsLeft } from 'lucide-react';
import cn from 'clsx';

const Sidebar: FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    const serviceResponse = await authService.logout();

    if (serviceResponse.data) {
      toast.success('Successfully logged out!');
      router.replace(PUBLIC_URL.login());
    } else {
      toast.error('Some error, please try later');
    }
  };

  return (
    <div className="w-3/12 shadow-md h-screen px-4 py-8 relative">
      <h1 className="text-primary text-3xl font-bold mb-6">FitMemo</h1>
      <nav className="mb-8">
        <ul>
          {appPages.map((page) => (
            <Link
              className={cn(
                'mb-4 block rounded-lg ease-in-out transition-all duration-200 hover:bg-gray-100' +
                  ' hover:text-primary',
                {
                  'bg-gray-200 text-secondary': pathname === page.pagePath,
                },
              )}
              href={page.pagePath}
              key={page.pagePath}
            >
              <li className="text-lg p-2 flex items-center justify-start">
                <page.icon className="mr-2" />
                <span>{page.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <div>
        <div>Controllers</div>
        <button onClick={handleLogout}>
          <LogOut />
        </button>
      </div>
      <div className="absolute top-4 right-4 cursor-pointer">
        <ChevronsLeft />
      </div>
    </div>
  );
};

export default Sidebar;
