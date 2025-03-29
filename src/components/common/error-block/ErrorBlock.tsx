import { FC } from 'react';
import cn from 'clsx';

interface IProps {
  text?: string;
  className?: string;
}

const ErrorBlock: FC<IProps> = ({ text, className }) => {
  return <div className={cn('', className)}>{text ? text : 'Some error, please try later'}</div>;
};

export default ErrorBlock;
