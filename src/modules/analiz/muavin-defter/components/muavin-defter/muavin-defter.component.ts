import { MuavinService } from '@analiz/muavin-defter/business/muavin.service';
import { Muavin } from '@analiz/mizan/models/muavin.interface';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { hesapKodlari } from '@constants/hesap-kodlari';
import { map, merge, of, startWith, Subscription, switchMap } from 'rxjs';
import { Company } from '@firmalar/mdoels/company.interface';
import { GlobalStore } from '@store/global.store';

@Component({
  selector: 'app-muavin-defter',
  templateUrl: './muavin-defter.component.html',
  styleUrls: ['./muavin-defter.component.scss'],
  host: {
    class: 'bg-white d-block rounded p-3',
  },
})
export class MuavinDefterComponent implements OnInit, OnDestroy {
  data: Muavin[];
  resultsLength: number;
  hesapKodlari = hesapKodlari;
  selectedHesapKodu: number;
  onFilterChange = new EventEmitter<never>();
  onDelete = new EventEmitter<never>();
  displayedColumns = [
    'mainId',
    'postingDate',
    'lineNumber',
    'lineNumberCounter',
    'documentNumber',
    'documentDate',
    'detailcomment',
    'debitAmount',
    'creditAmount',
    'debitBalanbce',
    'creditBalanbce',
  ];
  subscriptions: Subscription[] = [];
  private _paginator: MatPaginator;
  public get paginator(): MatPaginator {
    return this._paginator;
  }
  @ViewChild(MatPaginator) public set paginator(value: MatPaginator) {
    this._paginator = value;
    if (!this.paginator) {
      return;
    }
    this.subscriptions.push(
      merge(this.paginator.page, this.onDelete, this.onFilterChange)
        .pipe(
          startWith({}),
          switchMap(() => {
            if (!this.periodEnd || !this.periodStart) {
              return [];
            }
            return this.muavinService.subsidiaryledger({
              count: 10,
              mainId: this.selectedHesapKodu || 0,
              pageNumber: this.paginator.pageIndex,
              periodEnd: this.periodEnd,
              periodStart: this.periodStart,
              vkn: this.selectedCompany.taxNumber,
            });
          }),
          map((value: Muavin[]) => {
            if (value.length > 0) {
              this.resultsLength = 1000;
              return value;
            }
            return [];
          })
        )
        .subscribe((value) => (this.data = value))
    );
  }
  private periodEnd: string;
  private periodStart: string;
  selectedCompany: Company;
  constructor(private muavinService: MuavinService, globalStore: GlobalStore) {
    this.subscriptions.push(
      globalStore.selectedCompany$.subscribe((company) => {
        this.selectedCompany = company;
        this.resetPaginatorAndGetData();
      })
    );
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
  onFilter() {
    this.resetPaginatorAndGetData();
  }
  onDeleteHandle() {
    this.selectedHesapKodu = undefined;
    this.resetPaginatorAndGetData();
  }
  onPeriodChange(value: {
    selectedStartYear: number;
    selectedStartMonth: number;
    selectedEndtYear: number;
    selectedEndtMonth: number;
  }) {
    this.periodEnd = `${value.selectedEndtYear}-${value.selectedEndtMonth}`;
    this.periodStart = `${value.selectedStartYear}-${value.selectedStartMonth}`;
    this.resetPaginatorAndGetData();
  }
  private resetPaginatorAndGetData() {
    if (!this.paginator) {
      return;
    }
    this.paginator.pageIndex = 0;
    this.onFilterChange.emit();
  }
}
