import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AktifVarliklarTableComponent } from './components/aktif-varliklar-table/aktif-varliklar-table.component';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyModule } from '@shared-components/currency/currency.module';

@NgModule({
  declarations: [AktifVarliklarTableComponent],
  imports: [CommonModule, MatIconModule, CurrencyModule],
  exports: [AktifVarliklarTableComponent],
})
export class AktifVarliklarTableModule {}
