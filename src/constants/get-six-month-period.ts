import { makeImmutable } from '@custom-utils/make-immutable.util';
import { getYears } from './get-years';

export const getSixMonthPeriod = (startYear: number = 2010) => {
  const years = getYears(startYear);
  const threeMonthPeriods: string[] = [];
  years.forEach((year) => {
    threeMonthPeriods.push(`${year}-01`);
    threeMonthPeriods.push(`${year}-02`);
  });
  return makeImmutable<string[]>(threeMonthPeriods);
};
