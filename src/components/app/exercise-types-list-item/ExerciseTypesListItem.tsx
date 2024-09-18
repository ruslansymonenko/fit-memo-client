import { FC, useState } from 'react';
import { Star, Trash, SquarePen } from 'lucide-react';
import { IExerciseTypeResponse } from '@/types/server-response-types/exercise-type-response';
import { openUpdateElementModal } from '@/store/slices/modals/updateElementModalSlice';
import { openDeleteCheckModal } from '@/store/slices/modals/deleteCheckModalSlice';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import cn from 'clsx';
import { exerciseTypeService } from '@/services/exercise-type/exercise-type.service';
import toast from 'react-hot-toast';
import { getErrorMessage } from '@/utils/getErrorMessage/getErrorMessage';

interface IExerciseTypesListItemProps {
  exerciseType: IExerciseTypeResponse;
  indexNumber: number;
}

const ExerciseTypesListItem: FC<IExerciseTypesListItemProps> = ({ exerciseType, indexNumber }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(
    exerciseType.isFavorite ? exerciseType.isFavorite : false,
  );
  const dispatch: AppDispatch = useDispatch();

  const openUpdateTypeModal = () => {
    if (exerciseType.id) {
      dispatch(openUpdateElementModal(exerciseType.id));
    }
  };

  const openDeleteCheck = () => {
    if (exerciseType.id) {
      dispatch(openDeleteCheckModal(exerciseType.id));
    }
  };

  const toggleFavorite = async (id: number) => {
    setIsFavorite(!isFavorite);

    try {
      if (id) {
        const data = {
          isFavorite: !isFavorite,
        };

        const updatedExerciseType = await exerciseTypeService.update(id, data);

        if (updatedExerciseType.data.isFavorite) {
          toast.success('Added to favorite!');
        } else {
          toast.success('Removed from favorite!');
        }
      } else {
        toast.error('Wrong item id');
      }
    } catch (error: any) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <li className="flex items-center justify-between shadow-md p-4 rounded-md my-4">
      <div className="cursor-pointer font-bold hover:text-primary transition-colors flex w-2/4">
        <span className="mr-2">№ {indexNumber}.</span>
        <h4>{exerciseType.name}</h4>
      </div>
      <div className="w-1/4 flex items-center">
        <span className="font-bold mr-4 text-secondary">Measure:</span>
        <span>{exerciseType.measure.type}</span>
      </div>
      <div className="w-1/4 flex items-center justify-end">
        <button
          className="mx-2 cursor-pointer hover:text-rose-600 transition-colors"
          onClick={() => toggleFavorite(exerciseType.id)}
        >
          <Star className={cn('', isFavorite ? 'text-primary' : '')} strokeWidth={3} />
        </button>
        <button
          className="mx-2 cursor-pointer hover:text-rose-600 transition-colors"
          onClick={openUpdateTypeModal}
        >
          <SquarePen />
        </button>
        <button
          className="mx-2 cursor-pointer hover:text-rose-600 transition-colors"
          onClick={openDeleteCheck}
        >
          <Trash />
        </button>
      </div>
    </li>
  );
};

export default ExerciseTypesListItem;
