import { EnumWorkoutStatus } from '@/types/data-types/workout.interface';

export const getStatusColor = (status: string) => {
  switch (status) {
    case EnumWorkoutStatus.NEW:
      return '#74b9ff';
    case EnumWorkoutStatus.IN_PROGRESS:
      return '#ff7675';
    case EnumWorkoutStatus.DONE:
      return '#00b894';
    default:
      return '#0f172a';
  }
};
