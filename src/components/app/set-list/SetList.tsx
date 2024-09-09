import { FC } from 'react';
import { ISetResponse } from '@/types/server-response-types/set-response.interface';
import SetListItem from '@/components/app/set-list-item/SetListItem';
import { IMeasure } from '@/types/data-types/measure.interface';

interface ISetListProps {
  sets: ISetResponse[];
  measure: IMeasure;
}

const SetList: FC<ISetListProps> = ({ sets, measure }) => {
  return (
    <ul>
      {sets.map((item, index) => (
        <SetListItem set={item} setNumber={index + 1} measure={measure} />
      ))}
    </ul>
  );
};

export default SetList;
