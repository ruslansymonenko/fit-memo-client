import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cn from 'clsx';
import styles from './Button.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  addClasses?: string;
  action?: () => void;
}

const Button: FC<IProps> = ({ children, addClasses, action, ...props }) => {
  return (
    <button className={cn(styles.button, addClasses)} {...props}>
      {children}
    </button>
  );
};

export default Button;
