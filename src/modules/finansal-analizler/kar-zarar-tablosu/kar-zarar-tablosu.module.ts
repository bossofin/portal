import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KarZararTablosuRoutingModule } from './kar-zarar-tablosu-routing.module';
import { KarZararTablosuComponent } from './components/kar-zarar-tablosu/kar-zarar-tablosu.component';
import { SelectPeriodModule } from '@shared-components/select-period/select-period.module';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyModule } from '@shared-components/currency/currency.module';
import { KarZararTablosuBarChartComponent } from './components/kar-zarar-tablosu-bar-chart/kar-zarar-tablosu-bar-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { SelectCompanyModule } from '@shared-components/select-company/select-company.module';

@NgModule({
  declarations: [KarZararTablosuComponent, KarZararTablosuBarChartComponent],
  imports: [
    CommonModule,
    KarZararTablosuRoutingModule,
    SelectPeriodModule,
    MatIconModule,
    CurrencyModule,
    NgChartsModule,
    SelectCompanyModule,
  ],
})
export class KarZararTablosuModule {}
