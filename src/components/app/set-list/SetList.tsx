import { FC } from 'react';
import { ISetResponse } from '@/types/server-response-types/set-response.interface';
import SetListItem from '@/components/app/set-list-item/SetListItem';
import { IMeasure } from '@/types/data-types/measure.interface';

interface IProps {
  sets: ISetResponse[];
  measure: IMeasure;
}

const SetList: FC<IProps> = ({ sets, measure }) => {
  return (
    <ul>
      {sets.map((item, index) => (
        <SetListItem key={item.id} set={item} setNumber={index + 1} measure={measure} />
      ))}
    </ul>
  );
};

export default SetList;
