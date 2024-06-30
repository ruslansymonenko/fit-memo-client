import { FC } from 'react';
import styles from './Footer.module.scss';
import { Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.title_container}>
          <h2 className={styles.title}>FitMemo</h2>
        </div>

        <div className="lg:flex lg:items-center">
          <ul className="flex space-x-6">
            <li>
              <Link href="#">
                <Twitter color={'white'} />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-gray-300 hover:text-white text-sm">
                Email
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 text-white">Information</h4>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-gray-300 hover:text-white text-sm">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white text-sm">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white text-sm">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-gray-300 text-sm mt-10">
        © 2024
        <a href="https://readymadeui.com/" target="_blank" className="hover:underline mx-1">
          FitMemo
        </a>
        All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
