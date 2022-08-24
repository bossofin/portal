export interface SelectPeriodData {
  periods: string[];
  periodType: PeriodType;
  selectedYear?: number;
}

export type PeriodType = 'aylik' | 'ucAylik' | 'altiAylik' | 'yillik';
