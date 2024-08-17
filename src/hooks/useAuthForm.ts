import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthForm } from '@/types/auth.interface';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/auth/auth.service';
import toast from 'react-hot-toast';
import { PRIVATE_URL } from '@/config/url.config';

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
    onError(error) {
      if (error.message) {
        toast.error(error.message);
      } else {
        toast.error('Something went wrong, please try later');
      }
    },
  });

  const onSubmit: SubmitHandler<IAuthForm> = (data) => {
    mutate(data);
  };

  return { onSubmit, form, isPending };
}
