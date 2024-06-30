import { FC } from 'react';
import styles from './RegisterForm.module.scss';
import { Mail, Lock } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/common/button/Button';

const RegisterForm: FC = () => {
  return (
    <div className={styles.form_container}>
      <h2 className={styles.title}>Sign up</h2>
      <form className={styles.form}>
        <div>
          <label className={styles.input_label}>Email</label>
          <div className={styles.input_container}>
            <input
              name="email"
              type="email"
              className={styles.input}
              placeholder="Enter user email"
            />
            <Mail />
          </div>
        </div>

        <div>
          <label className={styles.input_label}>Password</label>
          <div className={styles.input_container}>
            <input
              name="password"
              type="password"
              className={styles.input}
              placeholder="Enter password"
            />
            <Lock />
          </div>
        </div>

        <div className={styles.controllers}>
          <div className={styles.checkbox_container}>
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className={styles.checkbox}
            />
            <label htmlFor="remember-me" className={styles.checkbox_label}>
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <Link href="#" className={styles.forgot_pass_link}>
              Forgot your password?
            </Link>
          </div>
        </div>

        <div className={styles.btn_container}>
          <Button addClasses={'bg-primary hover:bg-lightBg'}>Registration</Button>
        </div>
        <p className="text-gray-800 text-sm !mt-8 text-center">
          Already have an account?{' '}
          <Link href="/auth/login" className={styles.link}>
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
