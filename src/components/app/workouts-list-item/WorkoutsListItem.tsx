'use client';

import { FC, useEffect, useState } from 'react';
import { IWorkoutResponse } from '@/types/server-response-types/workout-response.interface';
import cn from 'clsx';
import { ITag } from '@/types/data-types/tag.interface';
import Link from 'next/link';
import { PRIVATE_URL } from '@/config/url.config';
import { getStatusClass } from '@/utils/getStatusClass/getStatusClass';
import styles from './WorkoutListItem.module.scss';
import Image from 'next/image';
import { SERVER_URL_WITHOUT_API_PREFIX } from '@/config/api.config';

interface IWorkoutsListItemProps {
  data: IWorkoutResponse;
}

const WorkoutsListItem: FC<IWorkoutsListItemProps> = ({ data }) => {
  const [tagsShortList, setTagsShortList] = useState<ITag[]>([]);

  useEffect(() => {
    if (data.tags && data.tags.length > 2) {
      setTagsShortList(data.tags.slice(0, 2));
    } else {
      setTagsShortList(data.tags);
    }
  }, [data.tags]);

  return (
    <li className={styles.item}>
      <Link
        className="w-full h-full flex flex-col items-center justify-between"
        href={PRIVATE_URL.workout(data.id.toString())}
      >
        <div className="w-full flex">
          <div className="flex items-center justify-start w-1/3">
            <h4 className="text-sm">{data.name}</h4>
          </div>
          <div className="flex items-center justify-center w-1/3">
            <p>{data.date}</p>
          </div>
          <div className="flex items-center justify-center w-1/3">
            <p className={cn(`font-bold`, getStatusClass(data.status))}>{data.status}</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
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
          <div className="flex">
            {data.tags
              ? tagsShortList.map((tag) => (
                  <div className="mx-2 p-1 rounded-lg" style={{ backgroundColor: tag.color }}>
                    <span className="font-bold text-sm">{tag.name}</span>
                  </div>
                ))
              : ''}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default WorkoutsListItem;
