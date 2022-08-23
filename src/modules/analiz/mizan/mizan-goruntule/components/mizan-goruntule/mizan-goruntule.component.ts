import { MizanService } from '@analiz/mizan/business/mizan.service';
import { Mizan } from '@analiz/mizan/models/mizan-item.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-mizan-goruntule',
  templateUrl: './mizan-goruntule.component.html',
  styleUrls: ['./mizan-goruntule.component.scss'],
  host: {
    class: 'bg-white d-block rounded p-3',
  },
})
export class MizanGoruntuleComponent implements OnInit {
  selectedStartMonth: string;
  selectedEndMonth: string;
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
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  getMonthRange({
    selectedEndMonth,
    selectedStartMonth,
  }: {
    selectedEndMonth: string;
    selectedStartMonth: string;
  }) {
    this.selectedEndMonth = selectedEndMonth;
    this.selectedStartMonth = selectedStartMonth;
    this.onSearch();
  }

  async onSearch() {
    const requets$ = this.mizanService.getTrialBalance(
      `${this.selectedStartMonth}/${this.selectedEndMonth}`
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