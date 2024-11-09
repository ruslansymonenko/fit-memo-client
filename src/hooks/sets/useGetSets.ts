import { useQuery } from '@tanstack/react-query';
import { workoutService } from '@/services/workout/workout.service';
import { setService } from '@/services/set/set.service';

export const useGetSetById = (id: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['set-by-id'],
    queryFn: () => setService.getById(id),
  });

  return { data, error, isLoading };
};

export const useGetByExercise = (id: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['all-sets', id],
    queryFn: () => setService.getByExerciseId(id),
  });

  return { data, error, isLoading };
};
