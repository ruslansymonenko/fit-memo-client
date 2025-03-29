'use client';

import { FC } from 'react';
import Link from 'next/link';
import { appPages } from '@/components/app/sidebar/nav-data';
import { LogOut } from 'lucide-react';
import { authService } from '@/services/auth/auth.service';
import toast from 'react-hot-toast';
import { usePathname, useRouter } from 'next/navigation';
import { PUBLIC_URL } from '@/config/url.config';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import cn from 'clsx';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { toggleIsSidebarOpen } from '@/store/slices/sidebarSlice';

interface IProps {
  isOpen: boolean;
}

const Sidebar: FC<IProps> = ({ isOpen }) => {
  const router = useRouter();
  const pathname: string = usePathname();
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = async () => {
    const serviceResponse = await authService.logout();

    if (serviceResponse.data) {
      toast.success('Successfully logged out!');
      router.replace(PUBLIC_URL.login());
    } else {
      toast.error('Some error, please try later');
    }
  };

  const handleSidebarOpening = () => {
    dispatch(toggleIsSidebarOpen());
  };

  return (
    <section
      className={cn(
        'shadow-md h-screen px-4 py-8 relative flex flex-col transition-all',
        isOpen ? 'w-2/12' : 'w-12',
      )}
    >
      <div className={cn('h-full', isOpen ? '' : 'hidden')}>
        <h1 className="text-primary text-3xl font-bold mb-6">FitMemo</h1>
        <nav className="mb-8 h-5/6">
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
        <div className="">
          <button className="flex" onClick={handleLogout}>
            <LogOut className="mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </div>
      <div className="absolute top-4 right-4 cursor-pointer" onClick={handleSidebarOpening}>
        {isOpen ? <ChevronsLeft /> : <ChevronsRight />}
      </div>
    </section>
  );
};

export default Sidebar;
