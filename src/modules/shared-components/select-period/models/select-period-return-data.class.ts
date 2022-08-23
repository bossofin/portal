import {
  createUrlStringBySixPeriods,
  createUrlStringByThreePeriods,
} from '@custom-utils/create-url-string-by-periods.util';
import { SelectPeriodData } from './select-period-data.interface';

export class SelectPeriodReturnData {
  constructor(
    private data: SelectPeriodData,
    private isGrowThrateReport: boolean = false
  ) {}
  private getMonthlyURLstring() {
    const selectedMonthString = `${this.data.selectedYear}-${this.data.periods[0]}`;
    if (this.isGrowThrateReport) {
      return `firstPeriodStart=${selectedMonthString}&firstPeriodEnd=${selectedMonthString}`;
    }
    return `periodArray=${selectedMonthString}:${selectedMonthString}`;
  }
  private getThreeMonthURLstring() {
    return createUrlStringByThreePeriods(this.data);
  }
  private getSixMonthURLstring() {
    return createUrlStringBySixPeriods(this.data);
  }
  private getYearlyURLstring() {
    const selectedYearString = `${this.data.selectedYear}-01:${this.data.selectedYear}-12`;
    return `periodArray=${selectedYearString}`;
  }
  getURLString() {
    switch (this.data.periodType) {
      case 'aylik':
        return this.getMonthlyURLstring();
      case 'ucAylik':
        return this.getThreeMonthURLstring();
      case 'altiAylik':
        return this.getSixMonthURLstring();
      case 'yillik':
        return this.getYearlyURLstring();
      default:
        return null;
    }
  }
}
//http://bossofin.dev.nanobase.tech:8081/bossofin/growthratereport/6490519109?firstPeriodStart=2021-02&firstPeriodEnd=2021-02
//http://10.20.255.2:8081/bossofin/growthratereport/6490519109?firstPeriodStart=2021-04&firstPeriodEnd=2021-06&secondPeriodStart=2021-10&secondPeriodEnd=2021-12
