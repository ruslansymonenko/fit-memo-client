import { ISet } from '@/types/data-types/set.interface';
import { IRepeat } from '@/types/data-types/repeat.interface';

export interface ISetResponse extends ISet {
  repeats: IRepeat[];
}
