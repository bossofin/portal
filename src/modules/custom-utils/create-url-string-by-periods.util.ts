import {
  monthsBySixPeriod,
  monthsByThreePeriods,
} from '@constants/months-by-periods';
import { SelectPeriodData } from '@shared-components/select-period/models/select-period-data.interface';

const createUrlString = (
  selectedPeriods: SelectPeriodData,
  periodType: string
) => {
  const handleMap = (period: string) => {
    const year = period.split('-')[0];
    const quarter = period.split('-')[1];
    let monthArrayOfPeriod: string[];
    switch (periodType) {
      case 'ucAylik':
        monthArrayOfPeriod = monthsByThreePeriods[quarter];
        break;
      case 'altiAylik':
        monthArrayOfPeriod = monthsBySixPeriod[quarter];
        break;
      default:
        monthArrayOfPeriod = [];
        break;
    }
    const periodRangeArray = monthArrayOfPeriod.map(
      (month) => `${year}-${month}`
    );
    const periodUrlString = periodRangeArray.join(':');
    return `periodArray=${periodUrlString}`;
  };
  const selectedPeriodsUrlString = selectedPeriods.periods.map(handleMap);
  return selectedPeriodsUrlString.join('&');
};

export const createUrlStringByThreePeriods = (
  selectedPeriods: SelectPeriodData
) => createUrlString(selectedPeriods, 'ucAylik');
export const createUrlStringBySixPeriods = (
  selectedPeriods: SelectPeriodData
) => createUrlString(selectedPeriods, 'altiAylik');
