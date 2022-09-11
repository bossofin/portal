import { ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { RaporItem } from '@raporlar/model/rapor-item.interface';
import { ApexChart, ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard-apex-chart',
  templateUrl: './dashboard-apex-chart.component.html',
  styleUrls: ['./dashboard-apex-chart.component.scss'],
  inputs: ['data'],
})
export class DashboardApexChartComponent implements OnInit {
  @ViewChild('chartComponent') chartComponent: ChartComponent;
  private _data: RaporItem[];
  public get data(): RaporItem[] {
    return this._data;
  }
  public set data(value: RaporItem[]) {
    this._data = value;
    if (this.data) {
      this.chartComponent.updateSeries([
        {
          name: 'My-series',
          data: [
            value[0].companyRatio,
            value[0].idealRatio,
            value[0].sectoralRatio,
          ],
        },
      ]);
    }
  }
  chart: ApexChart = {
    type: 'bar',
    height: 350,
  };
  series = [
    {
      name: 'My-series',
      data: [10, 41],
    },
  ];
  title = {
    text: 'My First Angular Chart',
  };
  xaxis = {
    categories: ['2022', 'Optimum', 'Sektör'],
  };
  constructor() {}

  ngOnInit(): void {}
}
