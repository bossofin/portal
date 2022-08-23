import { CurrencyPipe } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-kar-zarar-tablosu-bar-chart',
  templateUrl: './kar-zarar-tablosu-bar-chart.component.html',
  styleUrls: ['./kar-zarar-tablosu-bar-chart.component.scss'],
  inputs: ['legendTitle', 'inputData', 'periods'],
  providers: [CurrencyPipe],
})
export class KarZararTablosuBarChartComponent implements OnInit, OnChanges {
  periods: string[];
  inputData: number[];
  private _data: { name: string; value: number }[];
  public get data(): { name: string; value: number }[] {
    return this._data;
  }
  public set data(value: { name: string; value: number }[]) {
    this._data = value;
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
        align: 'bottom',
        color: '#fff',
        formatter: (value: number) =>
          `${this.currencyPipe.transform(value, ' ')}₺`,
      },
    },
  };
  barChartPlugins = [DataLabelsPlugin];
  constructor(private currencyPipe: CurrencyPipe) {}

  private setBarChartOptions() {
    this.setChartData();
    const handleMap = (item: { name: string; value: number }) => item.value;
    const dataArray = this.data.map(handleMap);
    this.barChartData = {
      labels: [...this.periods],
      datasets: [
        {
          data: [...dataArray],
          backgroundColor: ['#31558F'],
          hoverBackgroundColor: ['#628acc'],
        },
      ],
    };
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.setBarChartOptions();
  }

  private setChartData() {
    if (this.periods && this.inputData) {
      const handleMap = (period: string, index: number) => ({
        name: period,
        value: this.inputData[index],
      });
      this.data = this.periods.map(handleMap);
    }
  }
}
