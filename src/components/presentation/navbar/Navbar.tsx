'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { menu } from './menu.data';
import cn from 'clsx';
import styles from './Navbar.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import Button from '@/components/common/button/Button';
import { LogOut, User } from 'lucide-react';
import { PUBLIC_URL } from '@/config/url.config';
import { authService } from '@/services/auth/auth.service';
import toast from 'react-hot-toast';

const Navbar: FC = () => {
  const pathName: string = usePathname();
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const cookies = document.cookie
      .split('; ')
      .find((row) => row.startsWith('accessToken='))
      ?.split('=')[1];

    if (cookies) {
      setToken(cookies);
    }
  }, []);

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
    <header className={styles.navbar}>
      <div className={styles.content}>
        <Link className={styles.logo} href={PUBLIC_URL.home()}>
          <h1 className={styles.logo_text}>FitMemo</h1>
        </Link>
        <nav className={styles.navigation}>
          {menu.map((item, index) => (
            <Link
              className={cn(
                styles.navigation_link,
                pathName === item.link ? 'text-primary' : 'text-fontDark',
              )}
              href={item.link}
              key={index}
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className={styles.controllers}>
          {token ? (
            <div className="flex items-center">
              <Link className={styles.controllers_link} href={PUBLIC_URL.login()}>
                <Button addClasses={'hover:shadow-lg hover:bg-primary'}>
                  <div>
                    <User />
                  </div>
                </Button>
              </Link>
              <Button onClick={handleLogout} addClasses={'hover:shadow-lg hover:bg-primary'}>
                <LogOut />
              </Button>
            </div>
          ) : (
            <Link className={styles.controllers_link} href={PUBLIC_URL.login()}>
              <Button>
                <div>
                  <User />
                </div>
                <span className="mx-4 text-sm">Authorization</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
