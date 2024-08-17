import { FC } from 'react';
import styles from './LoginForm.module.scss';
import { Mail, Lock } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/common/button/Button';
import { PUBLIC_URL } from '@/config/url.config';
import Input from '@/components/common/input/Input';

const LoginForm: FC = () => {
  return (
    <div className={styles.form_container}>
      <h2 className={styles.title}>Sign in</h2>
      <form className={styles.form}>
        <div>
          <label className={styles.input_label}>Email</label>
          <div className={styles.input_container}>
            <Input name="email" type="email" className="mr-2" placeholder="Enter user email" />
            <Mail />
          </div>
        </div>

        <div>
          <label className={styles.input_label}>Password</label>
          <div className={styles.input_container}>
            <Input name="password" type="password" className="mr-2" placeholder="Enter password" />
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
          <Button addClasses={'bg-primary hover:bg-lightBg'}>Login</Button>
        </div>
        <p className="text-gray-800 text-sm !mt-8 text-center">
          Don't have an account?{' '}
          <Link href={`${PUBLIC_URL.register()}`} className={styles.link}>
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
