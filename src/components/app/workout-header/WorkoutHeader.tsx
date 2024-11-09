'use client';

import { FC } from 'react';
import { IWorkoutResponse } from '@/types/server-response-types/workout-response.interface';
import { getFormattedDate } from '@/utils/getFormattedDate/getFormattedDate';
import Image from 'next/image';
import { SERVER_URL_WITHOUT_API_PREFIX } from '@/config/api.config';
import Loader from '@/components/common/loader/Loader';
import cn from 'clsx';
import { getStatusColor } from '@/utils/getStatusClass/getStatusColor';
import { convertMilliseconds } from '@/utils/convertMilliseconds/convertMilliseconds';
import { SquarePen, Trash } from 'lucide-react';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { openUpdateElementModal } from '@/store/slices/modals/updateElementModalSlice';
import { openDeleteCheckModal } from '@/store/slices/modals/deleteCheckModalSlice';

interface IProps {
  workout: IWorkoutResponse | null;
}

const WorkoutHeader: FC<IProps> = ({ workout }) => {
  const dispatch: AppDispatch = useDispatch();

  const openUpdateWorkoutModal = () => {
    if (workout && workout.id) {
      dispatch(openUpdateElementModal(workout.id));
    }
  };

  const openDeleteCheck = () => {
    if (workout && workout.id) {
      dispatch(openDeleteCheckModal(workout.id));
    }
  };

  return (
    <div>
      {workout ? (
        <div>
          <div className="flex items-center justify-between border-b-2 pb-2 mb-6">
            <div>
              <h4 className="text-lg">Workout №: {workout.id}</h4>
              <h4 className="text-lg font-bold">{workout.name}</h4>
            </div>
            <div className="flex flex-col items-center justify-start">
              <span className="mb-2">{getFormattedDate(workout.date)}</span>
              <div>
                <button
                  className="mx-2 cursor-pointer hover:text-rose-600 transition-colors"
                  onClick={openUpdateWorkoutModal}
                >
                  <SquarePen />
                </button>
                <button
                  className="mx-2 cursor-pointer hover:text-rose-600 transition-colors"
                  onClick={openDeleteCheck}
                >
                  <Trash />
                </button>
              </div>
            </div>
          </div>
          <div className="border-b-2 pb-2">
            <div className="flex items-center mb-2">
              <span className="mr-2 w-2/12">Type:</span>
              <div className="flex items-center">
                <Image
                  className="mr-2"
                  src={`${SERVER_URL_WITHOUT_API_PREFIX}/${workout.workoutType.workoutTypeIcon.icon}`}
                  alt={'workout type icon'}
                  width={30}
                  height={30}
                />
                <span className="font-bold">{workout.workoutType.name}</span>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-2 w-2/12">Status:</span>
              <div className="flex items-center">
                <span className={cn('font-bold')} style={{ color: getStatusColor(workout.status) }}>
                  {workout.status}
                </span>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-2 w-2/12">Duration:</span>
              <div className="flex items-center">
                <span className="">{convertMilliseconds(workout.duration)}</span>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-2 w-2/12">Tags:</span>
              <div className="flex">
                {workout.tags
                  ? workout.tags.map((tag) => (
                      <div
                        key={tag.id}
                        className="py-1 px-2 rounded-lg mr-2"
                        style={{ backgroundColor: tag.color }}
                      >
                        <span className="font-bold text-sm">{tag.name}</span>
                      </div>
                    ))
                  : '-'}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default WorkoutHeader;
