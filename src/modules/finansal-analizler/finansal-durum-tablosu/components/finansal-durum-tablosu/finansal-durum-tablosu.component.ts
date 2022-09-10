import { Component, OnDestroy, OnInit } from '@angular/core';
import { makeImmutable } from '@custom-utils/make-immutable.util';
import { FinansalAnalizlerService } from '@finanaslAnalizler/business/finansal-analizler.service';
import { FinansalDurumTablosuActiveData } from '@finanaslAnalizler/models/finansal-durum-tablosu-active-data.interface';
import { FinansalDurumTablosuApiResponse } from '@finanaslAnalizler/models/finansal-durum-tablosu-api-response.interface';
import { FinansalDurumTablosuPassiveData } from '@finanaslAnalizler/models/finansal-durum-tablosu-passive-data.interface';
import { Company } from '@firmalar/mdoels/company.interface';
import { SelectPeriodData } from '@shared-components/select-period/models/select-period-data.interface';
import { GlobalStore } from '@store/global.store';
import { lastValueFrom, Subscription } from 'rxjs';

@Component({
  selector: 'app-finansal-durum-tablosu',
  templateUrl: './finansal-durum-tablosu.component.html',
  styleUrls: ['./finansal-durum-tablosu.component.scss'],
  host: {
    class: 'bg-white d-block rounded p-3',
  },
})
export class FinansalDurumTablosuComponent implements OnInit, OnDestroy {
  activeItems: FinansalDurumTablosuActiveData[];
  passiveItems: FinansalDurumTablosuPassiveData[];
  selectedPeriods: string[];
  selectedPeriodsData: SelectPeriodData;
  giderKisitlamaTabloData: FinansalDurumTablosuApiResponse;
  selectedCompany: Company;
  subscriptions: Subscription[] = [];
  constructor(
    private finansalAnalizlerService: FinansalAnalizlerService,
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
  onSelectPeriod(selectedPeriodsData: SelectPeriodData) {
    this.selectedPeriodsData = selectedPeriodsData;
    this.setSelectedPeriods();
    this.onSearch();
  }
  private async onSearch() {
    if (!this.selectedPeriodsData) {
      return;
    }
    const request$ = this.finansalAnalizlerService.getDetailedBalance(
      makeImmutable(this.selectedPeriodsData),
      this.selectedCompany.taxNumber
    );
    const response = await lastValueFrom(request$);
    this.activeItems = response.map((item) => item.aktifVarliklar);
    this.passiveItems = response.map((item) => item.pasifKaynaklar);
    this.giderKisitlamaTabloData = response[0];
  }

  private setSelectedPeriods() {
    switch (this.selectedPeriodsData.periodType) {
      case 'aylik':
        this.selectedPeriods = [
          `${this.selectedPeriodsData.selectedYear}-${this.selectedPeriodsData.periods[0]}`,
        ];
        break;
      case 'yillik':
        this.selectedPeriods = [String(this.selectedPeriodsData.selectedYear)];
        break;
      default:
        this.selectedPeriods = this.selectedPeriodsData.periods;
        break;
    }
  }
}
