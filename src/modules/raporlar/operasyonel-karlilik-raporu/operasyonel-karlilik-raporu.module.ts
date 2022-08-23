import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { OperasyonelKarlilikRaporuRoutingModule } from './operasyonel-karlilik-raporu-routing.module';
import { OperasyonelKarlilikRaporuComponent } from './components/operasyonel-karlilik-raporu/operasyonel-karlilik-raporu.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { OperasyonelKarlilikRaporuBarChartComponent } from './components/operasyonel-karlilik-raporu-bar-chart/operasyonel-karlilik-raporu-bar-chart.component';
import { StarRateModule } from '@shared-components/star-rate/star-rate.module';

@NgModule({
  declarations: [
    OperasyonelKarlilikRaporuComponent,
    OperasyonelKarlilikRaporuBarChartComponent,
  ],
  imports: [
    CommonModule,
    OperasyonelKarlilikRaporuRoutingModule,
    MatSelectModule,
    FormsModule,
    NgChartsModule,
    StarRateModule,
  ],
})
export class OperasyonelKarlilikRaporuModule {}
