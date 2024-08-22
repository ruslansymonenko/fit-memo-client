import { FC } from 'react';
import { getFormattedDate } from '@/utils/getFormattedDate/getFormattedDate';

interface IGreetingProps {
  userName: string;
}

const Greeting: FC<IGreetingProps> = ({ userName }) => {
  const date: string = getFormattedDate(new Date());

  return (
    <div className="flex items-center justify-between border-b-2 pb-6 mb-8">
      <div>
        <h2 className="font-bold text-2xl mb-2">Hello, {userName}</h2>
        <p className="font-light text-sm">Track your progress here. You almost reach a goal!</p>
      </div>
      <div>
        <p className="mb-2">{date}</p>
      </div>
    </div>
  );
};

export default Greeting;