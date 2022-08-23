export interface SelectPeriodData {
  periods: string[];
  periodType: PeriodType;
  selectedYear?: string;
}

export type PeriodType = 'aylik' | 'ucAylik' | 'altiAylik' | 'yillik';
