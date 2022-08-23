import { Component, OnInit } from '@angular/core';
import { varlikVeKaynakRaporuChartType } from '@raporlarModel/varlik-ve-kaynak-raporu-bar-chart.types';
import { chartStaticData } from '@constants/reports/static-data';
import { RaporlarChartComponent } from '@raporlarModel/raporlar-chart-component-abstract.class';

@Component({
  selector: 'app-varlik-ve-kaynak-raporu-bar-chart',
  templateUrl: '../../../model/raporlar-chart.component.html',
  inputs: ['data', 'chartType'],
})
export class VarlikVeKaynakRaporuBarChartComponent
  extends RaporlarChartComponent
  implements OnInit
{
  chartType: varlikVeKaynakRaporuChartType;
  staticData = chartStaticData.varlikVeKaynak;

  ngOnInit(): void {}
}
