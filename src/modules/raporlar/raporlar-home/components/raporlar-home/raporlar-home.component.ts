import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { reportList } from '@constants/reports/rapor-drop-down-data';
import { makeImmutable } from '@custom-utils/make-immutable.util';
import { Company } from '@firmalar/mdoels/company.interface';
import { RaporlarService } from '@raporlar/business/raporlar.service';
import { ReportList } from '@raporlarModel/report-list.interface';
import { SelectPeriodData } from '@shared-components/select-period/models/select-period-data.interface';
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
export class RaporlarHomeComponent implements OnInit, OnDestroy {
  reportList = reportList;
  reportsResponse$: BehaviorSubject<{}>;
  selectedPeriods: string[];
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
  selectedCompany: Company;
  constructor(
    private raporlarService: RaporlarService,
    private router: Router
  ) {
    this.reportsResponse$ = raporlarService.reportsResponse$;
  }

  ngOnInit(): void {
    this.router.navigateByUrl('/raporlar');
  }

  ngOnDestroy(): void {
    this.raporlarService.resetData();
  }

  onSearch(selectedPeriodsData: SelectPeriodData) {
    this.raporlarService.selectedPeriods = makeImmutable(selectedPeriodsData);

    this.getReportsData();
  }

  onCompanySelect(company: Company) {
    this.selectedCompany = company;
  }

  private async getReportsData() {
    const request$ = this.raporlarService.getRatioReport(
      this.selectedCompany.taxNumber
    );
    const response = await lastValueFrom(request$);
    this.raporlarService.reportsResponse$.next(response);
  }
}
