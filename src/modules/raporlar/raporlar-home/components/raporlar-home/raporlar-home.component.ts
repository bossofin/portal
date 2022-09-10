import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { reportList } from '@constants/reports/rapor-drop-down-data';
import { makeImmutable } from '@custom-utils/make-immutable.util';
import { SelectCompany } from '@globalModels/select-company.abstract.class';
import { RaporlarService } from '@raporlar/business/raporlar.service';
import { ReportList } from '@raporlarModel/report-list.interface';
import { SelectPeriodData } from '@shared-components/select-period/models/select-period-data.interface';
import { GlobalStore } from '@store/global.store';
import { BehaviorSubject } from 'rxjs';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-raporlar-home',
  templateUrl: './raporlar-home.component.html',
  styleUrls: ['./raporlar-home.component.scss'],
  host: {
    class: 'bg-white d-block rounded p-3',
  },
})
export class RaporlarHomeComponent extends SelectCompany implements OnInit {
  reportList = reportList;
  reportsResponse$: BehaviorSubject<{}>;
  private _selectedReportTitle: ReportList;
  public get selectedReportTitle(): ReportList {
    return this._selectedReportTitle;
  }
  public set selectedReportTitle(value: ReportList) {
    this._selectedReportTitle = value;
    this.router.navigateByUrl(value.url);
  }
  private _selectedReport: string;
  public get selectedReport(): string {
    return this._selectedReport;
  }
  public set selectedReport(value: string) {
    this._selectedReport = value;
    this.raporlarService.selectedReport$.next(value);
  }
  selectedPeriodsData: SelectPeriodData;
  constructor(
    private raporlarService: RaporlarService,
    private router: Router,
    globalStore: GlobalStore
  ) {
    super(globalStore);
    this.reportsResponse$ = raporlarService.reportsResponse$;
  }

  ngOnInit(): void {
    this.router.navigateByUrl('/raporlar');
  }
  onCompanySelect(): void {
    this.onSearch();
  }
  override onDestroyHandle(): void {
    this.raporlarService.resetData();
  }

  onPeriodSelect(selectedPeriodsData: SelectPeriodData) {
    this.selectedPeriodsData = selectedPeriodsData;
    this.onSearch();
  }
  onSearch() {
    if (!this.selectedPeriodsData) {
      return;
    }
    this.raporlarService.selectedPeriods = makeImmutable(
      this.selectedPeriodsData
    );

    this.getReportsData();
  }
  private async getReportsData() {
    const request$ = this.raporlarService.getRatioReport(
      this.selectedCompany.taxNumber
    );
    const response = await lastValueFrom(request$);
    this.raporlarService.reportsResponse$.next(response);
  }
}
