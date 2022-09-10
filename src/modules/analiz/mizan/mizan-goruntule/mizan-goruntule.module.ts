import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MizanGoruntuleRoutingModule } from './mizan-goruntule-routing.module';
import { MizanGoruntuleComponent } from './components/mizan-goruntule/mizan-goruntule.component';
import { MatTableModule } from '@angular/material/table';
import { SelectPeriodModule } from '@shared-components/select-period/select-period.module';
import { CurrencyModule } from '@shared-components/currency/currency.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { SelectCompanyModule } from '@shared-components/select-company/select-company.module';
import { MuavinSelectPeriodModule } from '@analiz/muavin-defter/components/muavin-select-period/muavin-select-period.module';

@NgModule({
  declarations: [MizanGoruntuleComponent],
  imports: [
    CommonModule,
    MizanGoruntuleRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    SelectPeriodModule,
    CurrencyModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    SelectCompanyModule,
    MuavinSelectPeriodModule,
  ],
})
export class MizanGoruntuleModule {}
