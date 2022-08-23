import { Component, OnInit } from '@angular/core';
import { varlikVeKaynakKarlikRaporuChartType } from '@raporlarModel/varlik-ve-kaynak-karlilik-raporu-bar-chart.types';
import { chartStaticData } from '@constants/reports/static-data';
import { RaporlarChartComponent } from '@raporlarModel/raporlar-chart-component-abstract.class';

@Component({
  selector: 'app-varlik-ve-kaynak-karlilik-raporu-bar-chart',
  templateUrl: '../../../model/raporlar-chart.component.html',
  inputs: ['data', 'chartType'],
})
export class VarlikVeKaynakKarlilikBarChartComponent
  extends RaporlarChartComponent
  implements OnInit
{
  chartType: varlikVeKaynakKarlikRaporuChartType;
  staticData = chartStaticData.varlikVeKaynakKarlilik;

  ngOnInit(): void {}
}
