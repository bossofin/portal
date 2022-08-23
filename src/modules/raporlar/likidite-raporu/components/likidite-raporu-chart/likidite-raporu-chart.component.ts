import { Component, OnInit } from '@angular/core';
import { chartStaticData } from '@constants/reports/static-data';
import { likiditeOranChartType } from '@raporlarModel/likidite-rapor-chart.types';
import { RaporlarChartComponent } from '@raporlarModel/raporlar-chart-component-abstract.class';

@Component({
  selector: 'app-likidite-raporu-chart',
  templateUrl: '../../../model/raporlar-chart.component.html',
  inputs: ['data', 'chartType'],
})
export class LikiditeRaporuBarChartComponent
  extends RaporlarChartComponent
  implements OnInit
{
  chartType: likiditeOranChartType;
  staticData = chartStaticData.likidite;
  ngOnInit(): void {}
}
