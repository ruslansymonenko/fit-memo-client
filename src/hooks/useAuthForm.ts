import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthForm } from '@/types/data-types/auth.interface';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/auth/auth.service';
import toast from 'react-hot-toast';
import { PRIVATE_URL } from '@/config/url.config';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/utils/getErrorMessage/getErrorMessage';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/slices/user-slices/userSlice';
import { AppDispatch } from '@/store';

export function useAuthForm(type: 'login' | 'register') {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const form = useForm<IAuthForm>({
    mode: 'onChange',
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ['auth user'],
    mutationFn: (data: IAuthForm) => {
      if (type === 'register') {
        return authService.register(data);
      } else {
        return authService.login(data);
      }
    },
    onSuccess(responseData) {
      form.reset();
      dispatch(setUser(responseData.data.user));
      toast.success('Successfully authorization');
      router.replace(PRIVATE_URL.home());
    },
    onError(error: AxiosError) {
      const errorMessage: string = getErrorMessage(error);

      toast.error(`${errorMessage}`);
    },
  });

  const onSubmit: SubmitHandler<IAuthForm> = (data) => {
    mutate(data);
  };

  return { onSubmit, form, isPending };
}
