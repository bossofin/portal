import { Observable } from 'rxjs';
import { RaporItem } from './rapor-item.interface';
import { ChartConfiguration } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { SelectPeriodData } from '@shared-components/select-period/models/select-period-data.interface';

export abstract class RaporlarChartComponent {
  private _data: RaporItem[] | Observable<null>;
  public get data(): RaporItem[] | Observable<null> {
    return this._data;
  }
  public set data(value: RaporItem[] | Observable<null>) {
    this._data = value;
    this.setBarChartOptions();
    this.setStarRate();
  }
  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [],
  };
  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'start',
        color: '#fff',
      },
    },
  };
  barChartPlugins = [DataLabelsPlugin];
  starRate: number;
  below: boolean;
  above: boolean;
  compatible: boolean;
  private setStarRate() {
    if (this.data instanceof Array) {
      const firstChild = this.data[0];
      this.starRate = firstChild.starRate;
      const companyRatio = firstChild.companyRatio || firstChild.companyRate;
      const idealRatio = firstChild.idealRatio || firstChild.idealRate;
      this.below = companyRatio < idealRatio;
      this.above = companyRatio > idealRatio;
      this.compatible = companyRatio === idealRatio;
    }
  }

  private setBarChartOptions() {
    if (this.data instanceof Array) {
      const selectPeriodData: SelectPeriodData = JSON.parse(
        localStorage.getItem('selectedPeriodsOfReports')
      );
      const handleMap = (item: RaporItem) =>
        item.companyRatio || item.companyRate;
      const dataArray = this.data.map(handleMap);
      console.log(this.data);
      this.barChartData = {
        labels: [...selectPeriodData.periods, 'Optimum', 'Sektör'],
        datasets: [
          {
            data: [
              ...dataArray,
              this.data[0].idealRatio || this.data[0].idealRate,
              this.data[0].sectoralRatio || this.data[0].sectoralRate,
            ],
            backgroundColor: [
              ...selectPeriodData.periods.map(() => '#31558F'),
              '#50ad7d',
              '#d76767',
            ],
            hoverBackgroundColor: [
              ...selectPeriodData.periods.map(() => '#31558F'),
              '#50ad7d',
              '#d76767',
            ],
          },
        ],
      };
      console.log(this.barChartData);
    }
  }
}
