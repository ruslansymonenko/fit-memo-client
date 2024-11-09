'use client';

import { FC, useEffect, useState } from 'react';
import { getFormattedDate } from '@/utils/getFormattedDate/getFormattedDate';
import { useGetUser } from '@/hooks/user/useGetUser';
import { IUser } from '@/types/data-types/user.interface';

const Greeting: FC = () => {
  const userRequest = useGetUser();
  const [user, setUser] = useState<IUser | null>(null);
  const date: string = getFormattedDate(new Date());

  useEffect(() => {
    if (userRequest.data) {
      setUser(userRequest.data.data);
    } else {
      setUser(null);
    }
  }, [userRequest.data]);

  return (
    <div className="flex items-center justify-between border-b-2 pb-6 mb-8">
      <div>
        <h2 className="font-bold text-2xl mb-2">Hello, {user ? user.name : 'User'}</h2>
        <p className="font-light text-sm">Track your progress here. You almost reach a goal!</p>
      </div>
      <div>
        <p className="mb-2">{date}</p>
      </div>
    </div>
  );
};

export default Greeting;
