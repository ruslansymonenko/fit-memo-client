export enum EnumMeasuresTypes {
  KILOGRAM = 'KILOGRAM',
  KILOMETERS = 'KILOMETERS',
  REPEATS = 'REPEATS',
  METERS = 'METERS',
  HOURS = 'HOURS',
  MINUTES = 'MINUTES',
  SECONDS = 'SECONDS',
  CALORIES = 'CALORIES',
}

export interface IMeasure {
  id: number;
  createdAt: string;
  updatedAt: string;
  type: EnumMeasuresTypes;
}
