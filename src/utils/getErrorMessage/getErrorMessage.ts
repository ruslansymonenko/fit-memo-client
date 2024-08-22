import { AxiosError } from 'axios';

export function getErrorMessage(error: Error | AxiosError): string {
  if ('isAxiosError' in error && error.isAxiosError) {
    const axiosError = error as AxiosError<{ message?: string }>;
    return axiosError.response?.data?.message || error.message;
  } else {
    return error.message;
  }
}
