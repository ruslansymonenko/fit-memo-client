import { FC } from 'react';

import styles from './PricingCard.module.scss';
import { IPricingData } from '@/components/presentation/pricing/pricing.data';
import Button from '@/components/common/button/Button';
import { SquareCheckBig, Check } from 'lucide-react';

interface IPricingCardProps {
  data: IPricingData;
}

const PricingCard: FC<IPricingCardProps> = ({ data }) => {
  return (
    <li className={styles.card}>
      <div>
        <h3 className={styles.title}>{data.type}</h3>
        <p className={styles.price}>{`${data.price} ${data.currency}`}</p>
        <p className={styles.time_period}>{data.paymentPeriod}</p>
        <p className={styles.description}>{data.description}</p>
      </div>
      <ul className={styles.features}>
        {data.features.map((item) => (
          <li className={styles.feature_item}>
            <Check />
            <span className="ml-2">{item.feature}</span>
          </li>
        ))}
      </ul>
      <Button addClasses={'bg-secondaryLight hover:bg-primary hover:text-fontLight transition'}>
        <SquareCheckBig />
        <span className="ml-2">Choose</span>
      </Button>
    </li>
  );
};

export default PricingCard;
