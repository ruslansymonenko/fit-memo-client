import { useQuery } from '@tanstack/react-query';
import { workoutTypesService } from '@/services/workout-types/workout-types.service';
import { measureService } from '@/services/measures/measures.service';

export const useGetMeasureById = (id: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['measure-by-id'],
    queryFn: () => workoutTypesService.getById(id),
  });

  return { data, error, isLoading };
};

export const useGetAllMeasures = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['all-measures'],
    queryFn: measureService.getAll,
  });

  return { data, error, isLoading };
};
