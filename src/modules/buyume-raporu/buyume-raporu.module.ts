import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyumeRaporuRoutingModule } from './buyume-raporu-routing.module';
import { BuyumeRaporuComponent } from './components/buyume-raporu/buyume-raporu.component';
import { SelectYearModule } from '@shared-components/select-year/select-year.module';
import { SelectMonthModule } from '@shared-components/select-month/select-month.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SelectPeriodTypeModule } from '@shared-components/select-period-type/select-period-type.module';

@NgModule({
  declarations: [BuyumeRaporuComponent],
  imports: [
    CommonModule,
    BuyumeRaporuRoutingModule,
    SelectPeriodTypeModule,
    SelectYearModule,
    SelectMonthModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class BuyumeRaporuModule {}
