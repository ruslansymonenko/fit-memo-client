import { FC } from 'react';
import { IRepeat } from '@/types/data-types/repeat.interface';
import RepeatsListItem from '@/components/app/repeats-list-item/RepeatsListItem';
import { IMeasure } from '@/types/data-types/measure.interface';

interface IProps {
  repeats: IRepeat[];
  measure: IMeasure;
}

const RepeatsList: FC<IProps> = ({ repeats, measure }) => {
  return (
    <div className="w-1/2">
      {repeats.map((item, index) => (
        <RepeatsListItem key={item.id} repeat={item} measure={measure} />
      ))}
    </div>
  );
};

export default RepeatsList;
