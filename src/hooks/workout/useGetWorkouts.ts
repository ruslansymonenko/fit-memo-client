import { useQuery } from '@tanstack/react-query';
import { workoutService } from '@/services/workout/workout.service';

export const useGetWorkoutById = (id: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['workouts-by-id'],
    queryFn: () => workoutService.getById(id),
  });

  return { data, error, isLoading };
};

export const useGetAllWorkouts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['all-workouts'],
    queryFn: workoutService.getAll,
  });

  return { data, error, isLoading };
};
