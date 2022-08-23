import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasifVarliklarTableComponent } from './components/pasif-varliklar-table/pasif-varliklar-table.component';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyModule } from '@shared-components/currency/currency.module';
import { TableToggleArrowsModule } from '@shared-components/table-toggle-arrows/table-toggle-arrows.module';
import { TableRepeatableRowModule } from '@shared-components/table-repeatable-row/table-repeatable-row.module';

@NgModule({
  declarations: [PasifVarliklarTableComponent],
  imports: [
    CommonModule,
    MatIconModule,
    CurrencyModule,
    TableToggleArrowsModule,
    TableRepeatableRowModule,
  ],
  exports: [PasifVarliklarTableComponent],
})
export class PasifVarliklarTableModule {}
