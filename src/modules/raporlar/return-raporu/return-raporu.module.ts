import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnRaporuRoutingModule } from './return-raporu-routing.module';
import { ReturnRaporuChartComponent } from './components/return-raporu-chart/return-raporu-chart.component';
import { ReturnRaporuComponent } from './components/return-raporu/return-raporu.component';
import { NgChartsModule } from 'ng2-charts';
import { StarRateModule } from '@shared-components/star-rate/star-rate.module';

@NgModule({
  declarations: [ReturnRaporuChartComponent, ReturnRaporuComponent],
  imports: [
    CommonModule,
    ReturnRaporuRoutingModule,
    NgChartsModule,
    StarRateModule,
  ],
})
export class ReturnRaporuModule {}
