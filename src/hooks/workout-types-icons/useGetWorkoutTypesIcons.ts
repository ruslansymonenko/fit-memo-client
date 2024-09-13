import { useQuery } from '@tanstack/react-query';
import { workoutTypeIconsService } from '@/services/workout-icons/workout-type-icons.service';

export const useGetWorkoutTypeIconById = (id: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['workout-types-icons-by-id'],
    queryFn: () => workoutTypeIconsService.getById(id),
  });

  return { data, error, isLoading };
};

export const useGetAllWorkoutsTypeIcons = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['all-workouts-types-icons'],
    queryFn: workoutTypeIconsService.getAll,
  });

  return { data, error, isLoading };
};
