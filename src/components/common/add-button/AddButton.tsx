import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'clsx';
import styles from './AddButton.module.scss';
import { Plus } from 'lucide-react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  addClasses?: string;
  action?: () => void;
}

const IAddButtonProps: FC<IProps> = ({ addClasses, action, ...props }) => {
  return (
    <button className={cn(styles.button, addClasses)} {...props}>
      <div>
        <Plus color="#ffffff" size={50} />
      </div>
    </button>
  );
};

export default IAddButtonProps;
