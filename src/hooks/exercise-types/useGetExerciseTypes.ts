import { useQuery } from '@tanstack/react-query';
import { workoutTypesService } from '@/services/workout-types/workout-types.service';
import { exerciseTypeService } from '@/services/exercise-type/exercise-type.service';

export const useGetExerciseTypeById = (id: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['exercise-type-by-id'],
    queryFn: () => workoutTypesService.getById(id),
  });

  return { data, error, isLoading };
};

export const useGetAllExerciseTypes = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['all-exercise-types'],
    queryFn: exerciseTypeService.getAll,
  });

  return { data, error, isLoading };
};
