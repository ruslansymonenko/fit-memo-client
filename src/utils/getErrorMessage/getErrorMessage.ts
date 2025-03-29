import { AxiosError } from 'axios';

export function getErrorMessage(error: Error | AxiosError): string {
  if (error instanceof AxiosError) {
    const axiosError = error as AxiosError<{ message?: string | string[] }>;
    const responseData = axiosError.response?.data;

    if (responseData?.message) {
      const message = responseData.message;

      if (Array.isArray(message)) {
        return message[0];
      }

      return message;
    }

    return error.message;
  } else if (error instanceof Error) {
    return error.message;
  }

  console.log('Response Data:', error);

  return 'An unknown error occurred';
  // if (error instanceof AxiosError) {
  //   const axiosError = error as AxiosError<{ message?: string }>;
  //   const message = axiosError.response?.data?.message;
  //
  //   if (Array.isArray(message)) {
  //     return message[0];
  //   }
  //
  //   return axiosError.response?.data?.message || error.message;
  // } else if (error instanceof Error) {
  //   return error.message;
  // }
  // return 'An unknown error occurred';
  // if ('isAxiosError' in error && error.isAxiosError) {
  //   const axiosError = error as AxiosError<{ message?: string }>;
  //   return axiosError.response?.data?.message || error.message;
  // } else {
  //   return error.message;
  // }
}
