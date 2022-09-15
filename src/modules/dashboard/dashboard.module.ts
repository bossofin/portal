import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { SummaryComponent } from './components/summary/summary.component';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { NgChartsModule } from 'ng2-charts';
import { CurrencyModule } from '@shared-components/currency/currency.module';
import { MusteriBakiyeSiralamasiComponent } from './components/musteri-bakiye-siralamasi/musteri-bakiye-siralamasi.component';
import { MusteriCiroSiralamasiComponent } from './components/musteri-ciro-siralamasi/musteri-ciro-siralamasi.component';
import { DovizKuruComponent } from './components/doviz-kuru/doviz-kuru.component';
import { MatButtonModule } from '@angular/material/button';
import { SelectYearModule } from '@shared-components/select-year/select-year.module';
import { SelectMonthModule } from '@shared-components/select-month/select-month.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardApexChartComponent } from './components/dashboard-apex-chart/dashboard-apex-chart.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    DashboardComponent,
    PieChartComponent,
    BarChartComponent,
    SummaryComponent,
    TableComponent,
    MusteriBakiyeSiralamasiComponent,
    MusteriCiroSiralamasiComponent,
    DovizKuruComponent,
    DashboardApexChartComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatTableModule,
    NgChartsModule,
    CurrencyModule,
    MatButtonModule,
    SelectYearModule,
    SelectMonthModule,
    NgApexchartsModule,
    MatTooltipModule,
  ],
})
export class DashboardModule {}
