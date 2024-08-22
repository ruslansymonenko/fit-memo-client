'use client';

import { FC } from 'react';
import styles from './LoginForm.module.scss';
import { Mail, Lock, Loader } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/common/button/Button';
import { PUBLIC_URL } from '@/config/url.config';
import FormField from '@/components/common/form-field/FormField';
import { useAuthForm } from '@/hooks/useAuthForm';

const LoginForm: FC = () => {
  const { onSubmit, form, isPending } = useAuthForm('login');
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

  return (
    <div className={styles.form_container}>
      <h2 className={styles.title}>Sign in</h2>
      {isPending ? (
        <Loader />
      ) : (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className={styles.input_label}>Email</label>
            <div className={styles.input_container}>
              <FormField
                name="email"
                type="email"
                placeholder="Enter user email"
                control={control}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: emailRegex,
                    message: 'Please, enter a valid email address',
                  },
                }}
                className="mr-2"
              />
              <div className="flex items-center justify-center min-h-full">
                <Mail />
              </div>
            </div>
          </div>

          <div>
            <label className={styles.input_label}>Password</label>
            <div className={styles.input_container}>
              <FormField
                name="password"
                type="password"
                placeholder="Enter password"
                control={control}
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password length should be more than 6 characters',
                  },
                }}
                className="mr-2"
              />
              <div className="flex items-center justify-center min-h-full">
                <Lock />
              </div>
            </div>
          </div>

          {/*<div className={styles.controllers}>*/}
          {/*  <div className={styles.checkbox_container}>*/}
          {/*    <input*/}
          {/*      id="remember-me"*/}
          {/*      name="remember-me"*/}
          {/*      type="checkbox"*/}
          {/*      className={styles.checkbox}*/}
          {/*    />*/}
          {/*    <label htmlFor="remember-me" className={styles.checkbox_label}>*/}
          {/*      Remember me*/}
          {/*    </label>*/}
          {/*  </div>*/}
          {/*  <div className="text-sm">*/}
          {/*    <Link href="#" className={styles.forgot_pass_link}>*/}
          {/*      Forgot your password?*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className={styles.btn_container}>
            <Button addClasses={'bg-primary hover:bg-lightBg'}>Login</Button>
          </div>
          <p className="text-gray-800 text-sm !mt-8 text-center">
            Do not have an account?{' '}
            <Link href={`${PUBLIC_URL.register()}`} className={styles.link}>
              Register here
            </Link>
          </p>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
