'use client';

import { FC } from 'react';
import styles from './Faq.module.scss';
import { faqData } from '@/components/presentation/faq/faq.data';
import Accordion from '@/components/common/accordion/Accordion';

const Faq: FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>FAQ</h2>
      <h2 className={styles.subtitle}>Do you have question?</h2>
      <Accordion items={faqData} />
    </section>
  );
};

export default Faq;
