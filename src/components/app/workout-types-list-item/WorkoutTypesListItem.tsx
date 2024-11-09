import { FC } from 'react';
import { IWorkoutTypeResponse } from '@/types/server-response-types/workoutType-response-type';
import Image from 'next/image';
import { SERVER_URL_WITHOUT_API_PREFIX } from '@/config/api.config';
import { TrashIcon, SquarePen } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { openDeleteCheckModal } from '@/store/slices/modals/deleteCheckModalSlice';
import { openUpdateElementModal } from '@/store/slices/modals/updateElementModalSlice';

interface IProps {
  workoutType: IWorkoutTypeResponse;
}

const WorkoutTypesListItem: FC<IProps> = ({ workoutType }) => {
  const dispatch: AppDispatch = useDispatch();

  const openUpdateTypeModal = () => {
    if (workoutType.id) {
      dispatch(openUpdateElementModal(workoutType.id));
    }
  };

  const openDeleteCheck = () => {
    if (workoutType.id) {
      dispatch(openDeleteCheckModal(workoutType.id));
    }
  };

  return (
    <li className="shadow-lg p-4 flex flex-col items-center justify-center h-28 bg-mediumBg cursor-pointer relative">
      <div className="border-b-2 pb-2 w-full h-8  flex items-center justify-between">
        <span className="font-bold">{`Type`}</span>
        <div>
          <button className=" hover:scale-105 transition-all z-10" onClick={openUpdateTypeModal}>
            <SquarePen className="hover:text-rose-600 transition-all mr-2" width={20} height={20} />
          </button>
          <button className=" hover:scale-105 transition-all z-10" onClick={openDeleteCheck}>
            <TrashIcon className="hover:text-rose-600 transition-all" width={20} height={20} />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center hover:text-primary transition-colors w-full h-10">
        <Image
          className="mr-2"
          src={`${SERVER_URL_WITHOUT_API_PREFIX}/${workoutType.workoutTypeIcon.icon}`}
          alt={'workout type icon'}
          width={30}
          height={30}
        />
        <span>{workoutType.name}</span>
      </div>
    </li>
  );
};

export default WorkoutTypesListItem;
