import { makeImmutable } from '@custom-utils/make-immutable.util';
import { getYears } from './get-years';

export const getThreeMonthPeriod = (startYear: number = 2010) => {
  const years = getYears(startYear);
  const threeMonthPeriods: string[] = [];
  years.forEach((year) => {
    threeMonthPeriods.push(`${year}-01`);
    threeMonthPeriods.push(`${year}-02`);
    threeMonthPeriods.push(`${year}-03`);
    threeMonthPeriods.push(`${year}-04`);
  });
  return makeImmutable<string[]>(threeMonthPeriods);
};
