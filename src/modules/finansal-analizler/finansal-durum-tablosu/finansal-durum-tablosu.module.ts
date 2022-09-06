import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinansalDurumTablosuRoutingModule } from './finansal-durum-tablosu-routing.module';
import { FinansalDurumTablosuComponent } from './components/finansal-durum-tablosu/finansal-durum-tablosu.component';
import { SelectPeriodModule } from '@shared-components/select-period/select-period.module';
import { AktifVarliklarTableModule } from '@finanaslAnalizler/aktif-varliklar-table/aktif-varliklar-table.module';
import { PasifVarliklarTableModule } from '@finanaslAnalizler/pasif-varliklar-table/pasif-varliklar-table.module';
import { CurrencyModule } from '@shared-components/currency/currency.module';
import { FinansmanGiderKisitlamasiTabloComponent } from './components/finansman-gider-kisitlamasi-tablo/finansman-gider-kisitlamasi-tablo.component';
import { FinansmanGiderKisitlamasiDetayTabloComponent } from './components/finansman-gider-kisitlamasi-detay-tablo/finansman-gider-kisitlamasi-detay-tablo.component';
import { SelectCompanyModule } from '@shared-components/select-company/select-company.module';

@NgModule({
  declarations: [
    FinansalDurumTablosuComponent,
    FinansmanGiderKisitlamasiTabloComponent,
    FinansmanGiderKisitlamasiDetayTabloComponent,
  ],
  imports: [
    CommonModule,
    FinansalDurumTablosuRoutingModule,
    SelectPeriodModule,
    AktifVarliklarTableModule,
    PasifVarliklarTableModule,
    CurrencyModule,
    SelectCompanyModule,
  ],
})
export class FinansalDurumTablosuModule {}
