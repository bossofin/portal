import { Component, OnInit } from '@angular/core';
import { chartStaticData } from '@constants/reports/static-data';
import { RaporlarChartComponent } from '@raporlar/model/raporlar-chart-component-abstract.class';

@Component({
  selector: 'app-return-raporu-chart',
  templateUrl: '../../../model/raporlar-chart.component.html',
  inputs: ['data', 'chartType'],
})
export class ReturnRaporuChartComponent
  extends RaporlarChartComponent
  implements OnInit
{
  chartType: 'returnRaporu';
  staticData = chartStaticData.returnRaporu;
  ngOnInit(): void {}
}
