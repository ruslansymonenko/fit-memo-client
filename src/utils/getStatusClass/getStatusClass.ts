import { EnumWorkoutStatus } from '@/types/data-types/workout.interface';

export const getStatusClass = (status: string) => {
  switch (status) {
    case EnumWorkoutStatus.NEW:
      return 'text-new';
    case EnumWorkoutStatus.IN_PROGRESS:
      return 'text-inProgress';
    case EnumWorkoutStatus.DONE:
      return 'text-done';
    default:
      return 'text-fontDark';
  }
};
