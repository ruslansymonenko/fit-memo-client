import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cn from 'clsx';
import styles from './Button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  addClasses?: string;
  action?: () => void;
}

const Button: FC<IButtonProps> = ({ children, addClasses, action, ...props }) => {
  return (
    <button className={cn(styles.button, addClasses)} {...props}>
      {children}
    </button>
  );
};

export default Button;
