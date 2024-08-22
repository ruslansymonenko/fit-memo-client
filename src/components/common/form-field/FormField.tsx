import { FieldValues, Control, FieldPath, RegisterOptions, Controller } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';
import styles from './FormField.module.scss';
import cn from 'clsx';

interface IFormField<T extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  control: Control<T>;
  name: FieldPath<T>;
  rules: Omit<
    RegisterOptions<T, FieldPath<T>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

const FormField = <T extends Record<string, any>>({
  control,
  rules,
  name,
  className,
  ...rest
}: IFormField<T>): JSX.Element => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          <div className={styles.container}>
            <div className={styles.input_container}>
              <input
                name="email"
                type="text"
                className={cn(
                  'w-full bg-transparent text-sm border-b bg-lightBg focus:border-[#333] px-2 py-3' +
                    ' outline-none rounded',
                  error ? 'border-primaryLight' : 'border-gray-300',
                )}
                onChange={onChange}
                onBlur={onBlur}
                value={(value || '').toString()}
                {...rest}
              />
            </div>
            {error && <div className="text-primary font-bold">{error.message}</div>}
          </div>
        </>
      )}
    />
  );
};

export default FormField;
