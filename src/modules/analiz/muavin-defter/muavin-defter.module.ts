import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuavinDefterRoutingModule } from './muavin-defter-routing.module';
import { MuavinDefterComponent } from './components/muavin-defter/muavin-defter.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CurrencyModule } from '@shared-components/currency/currency.module';
import { MuavinSelectPeriodModule } from './components/muavin-select-period/muavin-select-period.module';

@NgModule({
  declarations: [MuavinDefterComponent],
  imports: [
    CommonModule,
    MuavinDefterRoutingModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    CurrencyModule,
    MuavinSelectPeriodModule,
    MatButtonModule,
  ],
  exports: [],
})
export class MuavinDefterModule {}
