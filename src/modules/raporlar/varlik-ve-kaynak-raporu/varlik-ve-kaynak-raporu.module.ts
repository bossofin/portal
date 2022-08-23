import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VarlikVeKaynakRaporuRoutingModule } from './varlik-ve-kaynak-raporu-routing.module';
import { VarlikVeKaynakRaporuComponent } from './components/varlik-ve-kaynak-raporu/varlik-ve-kaynak-raporu.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { VarlikVeKaynakRaporuBarChartComponent } from './components/varlik-ve-kaynak-raporu-bar-chart/varlik-ve-kaynak-raporu-bar-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { StarRateModule } from '@shared-components/star-rate/star-rate.module';

@NgModule({
  declarations: [
    VarlikVeKaynakRaporuComponent,
    VarlikVeKaynakRaporuBarChartComponent,
  ],
  imports: [
    CommonModule,
    VarlikVeKaynakRaporuRoutingModule,
    MatSelectModule,
    FormsModule,
    NgChartsModule,
    StarRateModule,
  ],
})
export class VarlikVeKaynakRaporuModule {}
