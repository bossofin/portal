import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VarlikVeKaynakKarlilikRaporuRoutingModule } from './varlik-ve-kaynak-karlilik-raporu-routing.module';
import { VarlikVeKaynakKarlilikRaporuComponent } from './components/varlik-ve-kaynak-karlilik-raporu/varlik-ve-kaynak-karlilik-raporu.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { VarlikVeKaynakKarlilikBarChartComponent } from './components/varlik-ve-kaynak-karlilik-raporu-bar-chart/varlik-ve-kaynak-karlilik-raporu-bar-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { StarRateModule } from '@shared-components/star-rate/star-rate.module';

@NgModule({
  declarations: [
    VarlikVeKaynakKarlilikRaporuComponent,
    VarlikVeKaynakKarlilikBarChartComponent,
  ],
  imports: [
    CommonModule,
    VarlikVeKaynakKarlilikRaporuRoutingModule,
    MatSelectModule,
    FormsModule,
    NgChartsModule,
    StarRateModule,
  ],
})
export class VarlikVeKaynakKarlilikRaporuModule {}
