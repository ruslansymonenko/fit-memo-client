import { FC } from 'react';
import { ISetResponse } from '@/types/server-response-types/set-response.interface';
import { IMeasure } from '@/types/data-types/measure.interface';
import RepeatsList from '@/components/app/repeats-list/RepeatsList';

interface ISetListItemProps {
  set: ISetResponse;
  setNumber: number;
  measure: IMeasure;
}

const SetListItem: FC<ISetListItemProps> = ({ set, setNumber, measure }) => {
  return (
    <div className="flex items-center border-2 py-1 w-6/12 justify-center h-20 rounded-md">
      <div className="font-bold w-1/2 flex items-center justify-center border-r-2 h-full">
        <h6 className="text-center">Set: {setNumber}.</h6>
      </div>
      <RepeatsList repeats={set.repeats} measure={measure} />
    </div>
  );
};

export default SetListItem;
