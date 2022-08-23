import { Component, OnInit } from '@angular/core';
import { chartStaticData } from '@constants/reports/static-data';
import { faaliyetOranChartType } from '@raporlarModel/faalyet-rapor-chart.types';
import { RaporlarChartComponent } from '@raporlarModel/raporlar-chart-component-abstract.class';

@Component({
  selector: 'app-faaliyet-raporu-bar-chart',
  templateUrl: '../../../model/raporlar-chart.component.html',
  inputs: ['data', 'chartType'],
})
export class FaaliyetRaporuBarChartComponent
  extends RaporlarChartComponent
  implements OnInit
{
  chartType: faaliyetOranChartType;
  staticData = chartStaticData.faaliyet;

  ngOnInit(): void {}
}
