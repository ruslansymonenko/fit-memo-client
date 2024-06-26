import { FC, ReactNode } from 'react';
import cn from 'clsx';
import styles from './Button.module.scss';

interface IButtonProps {
  children: ReactNode;
  className?: string;
  action?: () => void;
}

const Button: FC<IButtonProps> = ({ children, className, action, ...props }) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
