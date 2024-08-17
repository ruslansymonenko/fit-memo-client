'use client';

import { FC } from 'react';
import Link from 'next/link';
import { menu } from './menu.data';
import cn from 'clsx';
import styles from './Navbar.module.scss';
import { usePathname } from 'next/navigation';
import Button from '@/components/common/button/Button';
import { User } from 'lucide-react';
import { PUBLIC_URL } from '@/config/url.config';

const Navbar: FC = () => {
  const pathName: string = usePathname();

  return (
    <header className={styles.navbar}>
      <div className={styles.content}>
        <Link className={styles.logo} href="/">
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
          <Link className={styles.controllers_link} href={PUBLIC_URL.login()}>
            <Button>
              <User />
              <span className="block mx-4">Authorization</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
