import { FC } from 'react';
import cn from 'clsx';

interface IInputProps {
  name: string;
  type: string;
  className?: string;
  placeholder?: string;
}

const Input: FC<IInputProps> = ({ name, type, className, placeholder }) => {
  return (
    <input
      name={`${name}`}
      type={`${type}`}
      className={cn(
        className,
        'w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600',
      )}
      placeholder={`${placeholder}`}
    />
  );
};

export default Input;
