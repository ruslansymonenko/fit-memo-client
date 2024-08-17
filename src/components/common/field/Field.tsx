import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { IAuthForm } from '@/types/auth.interface';

interface IFiledProps {
  form: UseFormReturn<IAuthForm, any, undefined>;
  isPending: boolean;
}

const Field: FC<IFiledProps> = ({ form, isPending }) => {
  return (
    <>
      <FormField></FormField>
    </>
  );
};

export default Field;
