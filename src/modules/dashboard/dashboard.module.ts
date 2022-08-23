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

@NgModule({
  declarations: [
    DashboardComponent,
    PieChartComponent,
    BarChartComponent,
    SummaryComponent,
    TableComponent,
    MusteriBakiyeSiralamasiComponent,
    MusteriCiroSiralamasiComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatTableModule,
    NgChartsModule,
    CurrencyModule,
  ],
})
export class DashboardModule {}
