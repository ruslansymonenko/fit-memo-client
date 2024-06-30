import { FC } from 'react';
import LoginForm from '@/components/presentation/forms/login-form/LoginForm';
import styles from './Login.module.scss';

const Login: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.title_container}>
          <h2 className={styles.title}>FitMemo</h2>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
