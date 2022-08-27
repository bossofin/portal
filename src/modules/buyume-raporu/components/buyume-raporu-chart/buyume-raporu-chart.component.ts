import { Component, OnInit } from '@angular/core';
import { buyumeOraniChartType } from '@buyumeRaporu/models/buyume-rapor-api-response.interface';
import { chartStaticData } from '@constants/reports/static-data';
import { RaporItem } from '@raporlar/model/rapor-item.interface';
import { ChartConfiguration } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-buyume-raporu-chart',
  templateUrl: '../../../raporlar/model/raporlar-chart.component.html',
  inputs: ['data', 'chartType', 'selectedPeriod'],
})
export class BuyumeRaporuChartComponent implements OnInit {
  selectedPeriod: string[];
  chartType: buyumeOraniChartType;
  staticData = chartStaticData.buyumeRaporu;
  private _data: RaporItem;
  public get data(): RaporItem {
    return this._data;
  }
  public set data(value: RaporItem) {
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
  ngOnInit() {}
  private setStarRate() {
    this.starRate = this.data.starRate;
    const companyRatio = this.data.companyRatio || this.data.companyRate;
    const idealRatio = this.data.idealRatio || this.data.idealRate;
    this.below = companyRatio < idealRatio;
    this.above = companyRatio > idealRatio;
    this.compatible = companyRatio === idealRatio;
  }

  private setBarChartOptions() {
    if (this.data) {
      this.barChartData = {
        labels: [
          `${this.selectedPeriod[0]} - ${this.selectedPeriod[1]}`,
          'Optimum',
          'Sektör',
        ],
        datasets: [
          {
            data: [
              this.data.companyRate,
              this.data.idealRate,
              this.data.sectoralRate,
            ],
            backgroundColor: ['#31558F', '#50ad7d', '#d76767'],
            hoverBackgroundColor: ['#31558F', '#50ad7d', '#d76767'],
          },
        ],
      };
    }
  }
}
