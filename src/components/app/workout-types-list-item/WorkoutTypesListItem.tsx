import { FC } from 'react';
import { IWorkoutTypeResponse } from '@/types/server-response-types/workoutType-response-type';
import Image from 'next/image';
import { SERVER_URL_WITHOUT_API_PREFIX } from '@/config/api.config';
import { TrashIcon } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { openModal } from '@/store/slices/deleteCheckModalSlice';

interface IWorkoutTypesListItemProps {
  workoutType: IWorkoutTypeResponse;
}

const WorkoutTypesListItem: FC<IWorkoutTypesListItemProps> = ({ workoutType }) => {
  const dispatch: AppDispatch = useDispatch();

  const openDeleteCheck = () => {
    if (workoutType.id) {
      dispatch(openModal(workoutType.id));
    }
  };

  return (
    <li className="shadow-lg p-4 flex items-center justify-center h-20 bg-mediumBg cursor-pointer relative">
      <div className="flex items-center justify-center hover:text-primary transition-colors w-full">
        <Image
          className="mr-2"
          src={`${SERVER_URL_WITHOUT_API_PREFIX}/${workoutType.workoutTypeIcon.icon}`}
          alt={'workout type icon'}
          width={30}
          height={30}
        />
        <span>{workoutType.name}</span>
      </div>
      <button
        className="absolute top-2 right-2 hover:scale-105 transition-all z-10"
        onClick={openDeleteCheck}
      >
        <TrashIcon className="hover:text-rose-600 transition-all" width={20} height={20} />
      </button>
    </li>
  );
};

export default WorkoutTypesListItem;
