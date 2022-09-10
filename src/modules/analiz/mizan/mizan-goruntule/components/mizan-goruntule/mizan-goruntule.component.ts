import { MizanService } from '@analiz/mizan/business/mizan.service';
import { Mizan } from '@analiz/mizan/models/mizan-item.interface';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from '@firmalar/mdoels/company.interface';
import { GlobalStore } from '@store/global.store';
import { lastValueFrom, Subscription } from 'rxjs';

@Component({
  selector: 'app-mizan-goruntule',
  templateUrl: './mizan-goruntule.component.html',
  styleUrls: ['./mizan-goruntule.component.scss'],
  host: {
    class: 'bg-white d-block rounded p-3',
  },
})
export class MizanGoruntuleComponent implements OnInit, OnDestroy {
  periodStart: string;
  periodEnd: string;
  dataSource = new MatTableDataSource<Mizan>();
  displayedColumns: string[] = [
    'accountMainId',
    'description',
    'subTotalDebitAmount',
    'subTotalCreditAmount',
    'totalDebitBalance',
    'totalCreditBalance',
  ];
  showTable: boolean;
  selectedCompany: Company;
  private _paginator: MatPaginator;
  public get paginator(): MatPaginator {
    return this._paginator;
  }
  @ViewChild(MatPaginator) public set paginator(value: MatPaginator) {
    this._paginator = value;
    this.dataSource.paginator = this.paginator;
  }
  subscriptions: Subscription[] = [];
  constructor(
    private mizanService: MizanService,
    private snackbar: MatSnackBar,
    globalStore: GlobalStore
  ) {
    this.subscriptions.push(
      globalStore.selectedCompany$.subscribe((company) => {
        this.selectedCompany = company;
        this.onSearch();
      })
    );
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
  getMonthRange(value: {
    selectedStartYear: number;
    selectedStartMonth: number;
    selectedEndtYear: number;
    selectedEndtMonth: number;
  }) {
    this.periodEnd = `${value.selectedEndtYear}-${value.selectedEndtMonth}`;
    this.periodStart = `${value.selectedStartYear}-${value.selectedStartMonth}`;
    this.onSearch();
  }
  async onSearch() {
    if (!this.selectedCompany || !this.periodEnd || !this.periodStart) {
      return;
    }
    const requets$ = this.mizanService.getTrialBalance(
      `${this.periodStart}/${this.periodEnd}`,
      this.selectedCompany.taxNumber
    );
    const response = await lastValueFrom(requets$);
    this.showTable = response.length > 0;
    this.dataSource.data = response;
    if (response.length === 0) {
      this.snackbar.open('Sonuç bulunamadı.', 'Kapat', {
        duration: 5000,
      });
    }
  }
}
