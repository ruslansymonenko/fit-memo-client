import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthForm } from '@/types/data-types/auth.interface';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/auth/auth.service';
import toast from 'react-hot-toast';
import { PRIVATE_URL } from '@/config/url.config';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/utils/getErrorMessage/getErrorMessage';

export function useAuthForm(type: 'login' | 'register') {
  const router = useRouter();

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
    onSuccess() {
      form.reset();
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
