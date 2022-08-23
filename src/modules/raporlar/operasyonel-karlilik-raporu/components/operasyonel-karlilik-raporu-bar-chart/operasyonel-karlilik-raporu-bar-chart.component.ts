import { Component, OnInit } from '@angular/core';
import { chartStaticData } from '@constants/reports/static-data';
import { operasyonelKarlilikChartType } from '@raporlarModel/operasyonel-karlilik-chart.types';
import { RaporlarChartComponent } from '@raporlarModel/raporlar-chart-component-abstract.class';

@Component({
  selector: 'app-operasyonel-karlilik-raporu-bar-chart',
  templateUrl: '../../../model/raporlar-chart.component.html',
  inputs: ['data', 'chartType'],
})
export class OperasyonelKarlilikRaporuBarChartComponent
  extends RaporlarChartComponent
  implements OnInit
{
  chartType: operasyonelKarlilikChartType;
  staticData = chartStaticData.operasyonelKarlilik;

  ngOnInit(): void {}
}
