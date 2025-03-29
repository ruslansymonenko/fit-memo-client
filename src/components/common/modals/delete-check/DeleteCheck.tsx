'use client';

import { FC } from 'react';
import { X, TrashIcon } from 'lucide-react';
import Button from '@/components/common/button/Button';

interface IProps {
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
  onClose: () => void;
}

const DeleteCheck: FC<IProps> = ({ onConfirm, onCancel, message, onClose }) => {
  return (
    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
      <button className="absolute top-4 right-4" onClick={onClose}>
        <X />
      </button>

      <div className="my-4 text-center">
        <div className="flex items-center justify-center">
          <TrashIcon width={70} height={70} className="text-rose-600" />
        </div>
        <h4 className="text-gray-800 text-base font-semibold my-4">{message}</h4>

        <div className="flex">
          <Button children={'Cancel'} addClasses={'mr-4 bg-gray-200'} onClick={onCancel} />
          <Button children={'Delete'} addClasses={'bg-rose-600'} onClick={onConfirm} />
        </div>
      </div>
    </div>
  );
};

export default DeleteCheck;
