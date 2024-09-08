import { FC } from 'react';
import { ISetResponse } from '@/types/server-response-types/set-response.interface';

interface ISetListProps {
  sets: ISetResponse[];
}

const SetList: FC<ISetListProps> = ({ sets }) => {
  return <li>SetList</li>;
};

export default SetList;
