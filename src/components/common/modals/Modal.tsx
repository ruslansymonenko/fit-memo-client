import { FC, ReactNode } from 'react';

interface IModalProps {
  children: ReactNode;
  isVisible: boolean;
}

const Modal: FC<IModalProps> = ({ children, isVisible }) => {
  return (
    <div
      className={`${
        isVisible ? 'fixed inset-0' : 'hidden'
      } p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] overflow-auto before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.2)] transition-all`}
    >
      {children}
    </div>
  );
};

export default Modal;
