import { FC } from 'react';
import { IRepeat } from '@/types/data-types/repeat.interface';
import RepeatsListItem from '@/components/app/repeats-list-item/RepeatsListItem';
import { IMeasure } from '@/types/data-types/measure.interface';

interface IRenderListProps {
  repeats: IRepeat[];
  measure: IMeasure;
}

const RepeatsList: FC<IRenderListProps> = ({ repeats, measure }) => {
  return (
    <div className="w-1/2">
      {repeats.map((item, index) => (
        <RepeatsListItem repeat={item} measure={measure} />
      ))}
    </div>
  );
};

export default RepeatsList;
