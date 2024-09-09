import { EnumMeasuresTypes } from '@/types/data-types/measure.interface';

const measureShortNames: { [key in EnumMeasuresTypes]: string } = {
  [EnumMeasuresTypes.KILOGRAM]: 'kg',
  [EnumMeasuresTypes.KILOMETERS]: 'km',
  [EnumMeasuresTypes.REPEATS]: 'reps',
  [EnumMeasuresTypes.METERS]: 'm',
  [EnumMeasuresTypes.HOURS]: 'hr',
  [EnumMeasuresTypes.MINUTES]: 'min',
  [EnumMeasuresTypes.SECONDS]: 'sec',
  [EnumMeasuresTypes.CALORIES]: 'cal',
};

export function getShortMeasureName(measure: EnumMeasuresTypes): string {
  return measureShortNames[measure];
}
