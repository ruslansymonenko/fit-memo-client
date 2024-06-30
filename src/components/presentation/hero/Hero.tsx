import { FC } from 'react';

import styles from './Hero.module.scss';
import Button from '@/components/common/button/Button';
import { Dumbbell } from 'lucide-react';
import Link from 'next/link';

const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <h2 className={styles.title}>Unleash And Transform</h2>
      <h2 className={styles.title}>Your Workout Potential</h2>
      <h3 className={styles.subtitle}>FitMemo: Your Fitness Journey, Perfectly Organized.</h3>
      <Link className={styles.link} href="/auth/login">
        <Button addClasses="hover:bg-primary hover:text-fontLight transition">
          <Dumbbell />
          <span className="block mx-4">Lets start</span>
        </Button>
      </Link>
      <div className={styles.app_images}></div>
    </section>
  );
};

export default Hero;
