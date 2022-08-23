import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikiditeRaporuRoutingModule } from './likidite-raporu-routing.module';
import { LikiditeRaporuComponent } from './components/likidite-raporu/likidite-raporu.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { LikiditeRaporuBarChartComponent } from './components/likidite-raporu-chart/likidite-raporu-chart.component';
import { StarRateModule } from '@shared-components/star-rate/star-rate.module';

@NgModule({
  declarations: [LikiditeRaporuComponent, LikiditeRaporuBarChartComponent],
  imports: [
    CommonModule,
    LikiditeRaporuRoutingModule,
    MatSelectModule,
    FormsModule,
    NgChartsModule,
    StarRateModule,
  ],
})
export class LikiditeRaporuModule {}
