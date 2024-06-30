import { FC } from 'react';
import styles from './Register.module.scss';
import RegisterForm from '@/components/presentation/forms/register-form/RegisterForm';

const Register: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.title_container}>
          <h2 className={styles.title}>FitMemo</h2>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
};

export default Register;
