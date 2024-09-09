import { useQuery } from '@tanstack/react-query';
import { workoutTypesService } from '@/services/workout-types/workout-types.service';

export const useGetWorkoutTypeById = (id: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['workout-types-by-id'],
    queryFn: () => workoutTypesService.getById(id),
  });

  return { data, error, isLoading };
};

export const useGetAllWorkoutsTypes = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['all-workouts-types'],
    queryFn: workoutTypesService.getAll,
  });

  return { data, error, isLoading };
};
