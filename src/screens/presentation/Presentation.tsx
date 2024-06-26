import { FC } from 'react';

import styles from './Presentation.module.scss';
import Hero from '@/components/presentation/hero/Hero';
import Features from '@/components/presentation/features/Features';
import Faq from '@/components/presentation/faq/Faq';

const Presentation: FC = () => {
  return (
    <main className={styles.section}>
      <Hero />
      <Features />
      <Faq />
    </main>
  );
};

export default Presentation;
