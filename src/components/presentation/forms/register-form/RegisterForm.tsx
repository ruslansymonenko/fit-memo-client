'use client';

import { FC } from 'react';
import styles from './RegisterForm.module.scss';
import { Mail, Lock } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/common/button/Button';
import { PUBLIC_URL } from '@/config/url.config';
import Input from '@/components/common/input/Input';
import { useAuthForm } from '@/hooks/useAuthForm';

const RegisterForm: FC = () => {
  const { onSubmit, form, isPending } = useAuthForm('register');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <div className={styles.form_container}>
      <h2 className={styles.title}>Sign up</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className={styles.input_label}>Email</label>
          <div className={styles.input_container}>
            <Input
              {...register('email', { required: 'Email is required' })}
              type="email"
              className="mr-2"
              placeholder="Enter user email"
            />
            <Mail />
          </div>
          {errors.password && <p className={styles.error_message}>{errors.password.message}</p>}
        </div>

        <div>
          <label className={styles.input_label}>Password</label>
          <div className={styles.input_container}>
            <Input
              {...register('password', { required: 'Password is required' })}
              type="password"
              className="mr-2"
              placeholder="Enter password"
            />
            <Lock />
          </div>
          {errors.password && <p className={styles.error_message}>{errors.password.message}</p>}
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
          <Button addClasses={'bg-primary hover:bg-lightBg'} disabled={isPending}>
            Registration
          </Button>
        </div>
        <p className="text-gray-800 text-sm !mt-8 text-center">
          Already have an account?{' '}
          <Link href={`${PUBLIC_URL.login()}`} className={styles.link}>
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
