'use client';

import { FC, useEffect, useState } from 'react';
import { IWorkoutResponse } from '@/types/server-response-types/workout-response.interface';
import cn from 'clsx';
import { ITag } from '@/types/data-types/tag.interface';
import Link from 'next/link';
import { PRIVATE_URL } from '@/config/url.config';
import { getStatusColor } from '@/utils/getStatusClass/getStatusColor';
import styles from './WorkoutListItem.module.scss';
import Image from 'next/image';
import { SERVER_URL_WITHOUT_API_PREFIX } from '@/config/api.config';
import { getFormattedDate } from '@/utils/getFormattedDate/getFormattedDate';
import { SquarePen, Star, Trash } from 'lucide-react';
import toast from 'react-hot-toast';
import { getErrorMessage } from '@/utils/getErrorMessage/getErrorMessage';
import { workoutService } from '@/services/workout/workout.service';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { openUpdateElementModal } from '@/store/slices/modals/updateElementModalSlice';
import { openDeleteCheckModal } from '@/store/slices/modals/deleteCheckModalSlice';

interface IWorkoutsListItemProps {
  data: IWorkoutResponse;
}

const WorkoutsListItem: FC<IWorkoutsListItemProps> = ({ data }) => {
  const [tagsShortList, setTagsShortList] = useState<ITag[]>([]);
  const [isFavorite, setIsFavorite] = useState<boolean>(data.isFavorite ? data.isFavorite : false);
  const dispatch: AppDispatch = useDispatch();

  const openUpdateWorkoutModal = () => {
    if (data.id) {
      dispatch(openUpdateElementModal(data.id));
    }
  };

  const openDeleteCheck = () => {
    if (data.id) {
      dispatch(openDeleteCheckModal(data.id));
    }
  };

  const toggleFavorite = async (id: number) => {
    setIsFavorite(!isFavorite);

    try {
      if (id) {
        const data = {
          isFavorite: !isFavorite,
        };

        const updatedExerciseType = await workoutService.update(id, data);

        if (updatedExerciseType.data.isFavorite) {
          toast.success('Added to favorite!');
        } else {
          toast.success('Removed from favorite!');
        }
      } else {
        toast.error('Wrong item id');
      }
    } catch (error: any) {
      toast.error(getErrorMessage(error));
    }
  };

  useEffect(() => {
    if (data.tags && data.tags.length > 2) {
      setTagsShortList(data.tags.slice(0, 2));
    } else {
      setTagsShortList(data.tags);
    }
  }, [data.tags]);

  return (
    <li className={styles.item}>
      <div className="w-full h-full flex flex-col items-center justify-between">
        <div className="w-full flex border-b-2 pb-2">
          <Link
            className="flex items-center justify-start w-1/3 cursor-pointer hover:text-primary transition-all"
            href={PRIVATE_URL.workout(data.id.toString())}
          >
            <h4 className="text-sm font-bold">{data.name}</h4>
          </Link>
          <div className="flex items-center justify-center w-1/3">
            <p>{getFormattedDate(data.date)}</p>
          </div>
          <div className="w-1/3 flex items-center justify-end">
            <button className="mx-2 cursor-pointer hover:text-rose-600 transition-colors">
              <Star
                className={cn('', isFavorite ? 'text-primary' : '')}
                strokeWidth={3}
                onClick={() => toggleFavorite(data.id)}
              />
            </button>
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
        <div className="flex items-center justify-between w-full py-2">
          <div className="flex items-center justify-start w-1/3">
            <p className="mr-2">Type:</p>
            <Image
              className="mr-2"
              src={`${SERVER_URL_WITHOUT_API_PREFIX}/${data.workoutType.workoutTypeIcon.icon}`}
              alt={'workout type icon'}
              width={30}
              height={30}
            />
            <p className="text-sm font-light">{data.workoutType.name}</p>
          </div>
          <div className="flex items-center justify-center w-1/3">
            <p className={cn(`font-bold`)} style={{ color: getStatusColor(data.status) }}>
              {data.status}
            </p>
          </div>
          <div className="flex w-1/3 justify-end">
            {data.tags
              ? tagsShortList.map((tag) => (
                  <div className="mx-2 p-1 rounded-lg" style={{ backgroundColor: tag.color }}>
                    <span className="font-bold text-sm">{tag.name}</span>
                  </div>
                ))
              : ''}
          </div>
        </div>
      </div>
    </li>
  );
};

export default WorkoutsListItem;
