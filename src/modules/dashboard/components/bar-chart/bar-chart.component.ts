import { Component, OnInit } from '@angular/core';
import { RaporItem } from '@raporlar/model/rapor-item.interface';
import { ChartConfiguration } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  inputs: ['data', 'selectedYear', 'text'],
})
export class BarChartComponent implements OnInit {
  text: string;
  selectedYear: number;
  private _data: RaporItem[];
  public get data(): RaporItem[] {
    return this._data;
  }
  public set data(value: RaporItem[]) {
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
  constructor() {}
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
      const handleMap = (item: RaporItem) =>
        item.companyRatio || item.companyRate;
      const dataArray = this.data.map(handleMap);
      this.barChartData = {
        labels: [String(this.selectedYear), 'Optimum', 'Sektör'],
        datasets: [
          {
            data: [
              ...dataArray,
              this.data[0].idealRatio || this.data[0].idealRate,
              this.data[0].sectoralRatio || this.data[0].sectoralRate,
            ],
            backgroundColor: ['#31558F', '#50ad7d', '#d76767'],
            hoverBackgroundColor: ['#31558F', '#50ad7d', '#d76767'],
          },
        ],
      };
    }
  }
  ngOnInit(): void {}
}
