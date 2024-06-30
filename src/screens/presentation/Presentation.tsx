import { FC } from 'react';

import styles from './Presentation.module.scss';
import Hero from '@/components/presentation/hero/Hero';
import Features from '@/components/presentation/features/Features';
import Faq from '@/components/presentation/faq/Faq';
import Pricing from '@/components/presentation/pricing/Pricing';

const Presentation: FC = () => {
  return (
    <main className={styles.section}>
      <Hero />
      <Features />
      <Faq />
      <Pricing />
    </main>
  );
};

export default Presentation;
