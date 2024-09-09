import { FC } from 'react';
import { IRepeat } from '@/types/data-types/repeat.interface';
import { IMeasure } from '@/types/data-types/measure.interface';
import { getShortMeasureName } from '@/utils/getShortMeasureValue/getShortMeasureValue';

interface IRepeatsListItemProps {
  repeat: IRepeat;
  measure: IMeasure;
}

const RepeatsListItem: FC<IRepeatsListItemProps> = ({ repeat, measure }) => {
  return (
    <div className="px-4 flex flex-col items-center mr-4">
      <div>
        {repeat.quantity ? (
          <div>
            <span className="mr-2">Quantity: {repeat.quantity}</span>
          </div>
        ) : (
          ''
        )}
      </div>
      <div>
        <span className="mr-2">Value: {repeat.value}</span>
        <span>{getShortMeasureName(measure.type)}</span>
      </div>
    </div>
  );
};

export default RepeatsListItem;
