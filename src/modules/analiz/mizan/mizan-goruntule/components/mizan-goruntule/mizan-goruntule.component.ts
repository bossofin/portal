import { MizanService } from '@analiz/mizan/business/mizan.service';
import { Mizan } from '@analiz/mizan/models/mizan-item.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { SelectCompany } from '@globalModels/select-company.abstract.class';
import { GlobalStore } from '@store/global.store';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-mizan-goruntule',
  templateUrl: './mizan-goruntule.component.html',
  styleUrls: ['./mizan-goruntule.component.scss'],
  host: {
    class: 'bg-white d-block rounded p-3',
  },
})
export class MizanGoruntuleComponent extends SelectCompany implements OnInit {
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
  private _paginator: MatPaginator;
  public get paginator(): MatPaginator {
    return this._paginator;
  }
  @ViewChild(MatPaginator) public set paginator(value: MatPaginator) {
    this._paginator = value;
    this.dataSource.paginator = this.paginator;
  }
  constructor(
    private mizanService: MizanService,
    private snackbar: MatSnackBar,
    globalStore: GlobalStore
  ) {
    super(globalStore);
  }
  onCompanySelect(): void {
    this.onSearch();
  }
  ngOnInit(): void {}
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
    this.showTable = response.dataContainer.length > 0;
    this.dataSource.data = response.dataContainer;
    if (response.dataContainer.length === 0) {
      this.snackbar.open('Sonuç bulunamadı.', 'Kapat', {
        duration: 5000,
      });
    }
  }
}
