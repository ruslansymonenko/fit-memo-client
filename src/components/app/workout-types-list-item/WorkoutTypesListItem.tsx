import { FC } from 'react';
import { IWorkoutTypeResponse } from '@/types/server-response-types/workoutType-response-type';
import Image from 'next/image';
import { SERVER_URL_WITHOUT_API_PREFIX } from '@/config/api.config';

interface IWorkoutTypesListItemProps {
  workoutType: IWorkoutTypeResponse;
}

const WorkoutTypesListItem: FC<IWorkoutTypesListItemProps> = ({ workoutType }) => {
  return (
    <li className="shadow-lg p-4 flex items-center justify-center h-20 bg-mediumBg cursor-pointer hover:shadow-xl transition-all">
      <Image
        className="mr-2"
        src={`${SERVER_URL_WITHOUT_API_PREFIX}/${workoutType.workoutTypeIcon.icon}`}
        alt={'workout type icon'}
        width={30}
        height={30}
      />
      <span>{workoutType.name}</span>
    </li>
  );
};

export default WorkoutTypesListItem;
