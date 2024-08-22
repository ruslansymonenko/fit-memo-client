export interface IServiceResponse<T> {
  status: boolean;
  message: string;
  data: T | null;
}
