import { userService } from '@/services/user/user.service';
import { useQuery } from '@tanstack/react-query';

export const useGetUser = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: userService.getUserById,
  });

  return { data, error, isLoading };
};
