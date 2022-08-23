import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaaliyetRaporuRoutingModule } from './faaliyet-raporu-routing.module';
import { FaaliyetRaporuComponent } from './components/faaliyet-raporu/faaliyet-raporu.component';
import { MatSelectModule } from '@angular/material/select';
import { FaaliyetRaporuBarChartComponent } from './components/faaliyet-raporu-chart/faaliyet-raporu-bar-chart.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { StarRateModule } from '@shared-components/star-rate/star-rate.module';

@NgModule({
  declarations: [FaaliyetRaporuComponent, FaaliyetRaporuBarChartComponent],
  imports: [
    CommonModule,
    FaaliyetRaporuRoutingModule,
    MatSelectModule,
    FormsModule,
    NgChartsModule,
    StarRateModule,
  ],
})
export class FaaliyetRaporuModule {}
