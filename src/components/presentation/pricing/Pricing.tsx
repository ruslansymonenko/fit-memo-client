import { FC } from 'react';
import styles from './Pricing.module.scss';
import { pricingData } from '@/components/presentation/pricing/pricing.data';
import PricingCard from '@/components/presentation/pricing/pricing-card/PricingCard';

const Pricing: FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Pricing</h2>
      <h2 className={styles.subtitle}>Our current subscription plans.</h2>
      <div className={styles.prices}>
        <ul className={styles.pricing_list}>
          {pricingData.map((data) => (
            <PricingCard data={data} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Pricing;
