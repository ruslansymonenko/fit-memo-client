import { FC } from 'react';
import { Goal, Rotate3D, Trophy } from 'lucide-react';

import styles from './Features.module.scss';

const Features: FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Features</h2>
      <h3 className={styles.subtitle}>Check our main features</h3>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Goal className="mb-6" size={60} color={'#38BDF8'} />
          <h4>Achieve Your Goals</h4>
        </div>
        <div className={styles.card}>
          <Rotate3D className="mb-6" size={60} color={'#38BDF8'} />
          <h4>Transform Your Fitness Routine</h4>
        </div>
        <div className={styles.card}>
          <Trophy className="mb-6" size={60} color={'#38BDF8'} />
          <h4>Maximize Your Workouts</h4>
        </div>
      </div>
    </section>
  );
};

export default Features;
