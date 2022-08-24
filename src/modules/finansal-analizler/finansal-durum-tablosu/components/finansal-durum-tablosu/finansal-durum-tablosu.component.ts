import { Component, OnInit } from '@angular/core';
import { makeImmutable } from '@custom-utils/make-immutable.util';
import { FinansalAnalizlerService } from '@finanaslAnalizler/business/finansal-analizler.service';
import { FinansalDurumTablosuActiveData } from '@finanaslAnalizler/models/finansal-durum-tablosu-active-data.interface';
import { FinansalDurumTablosuApiResponse } from '@finanaslAnalizler/models/finansal-durum-tablosu-api-response.interface';
import { FinansalDurumTablosuPassiveData } from '@finanaslAnalizler/models/finansal-durum-tablosu-passive-data.interface';
import { SelectPeriodData } from '@shared-components/select-period/models/select-period-data.interface';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-finansal-durum-tablosu',
  templateUrl: './finansal-durum-tablosu.component.html',
  styleUrls: ['./finansal-durum-tablosu.component.scss'],
  host: {
    class: 'bg-white d-block rounded p-3',
  },
})
export class FinansalDurumTablosuComponent implements OnInit {
  activeItems: FinansalDurumTablosuActiveData[];
  passiveItems: FinansalDurumTablosuPassiveData[];
  selectedPeriods: string[];
  giderKisitlamaTabloData: FinansalDurumTablosuApiResponse;
  constructor(private finansalAnalizlerService: FinansalAnalizlerService) {}

  ngOnInit(): void {}
  async onSearch(selectedPeriodsData: SelectPeriodData) {
    this.setSelectedPeriods(selectedPeriodsData);
    const request$ = this.finansalAnalizlerService.getDetailedBalance(
      makeImmutable(selectedPeriodsData)
    );
    const response = await lastValueFrom(request$);
    this.activeItems = response.map((item) => item.aktifVarliklar);
    this.passiveItems = response.map((item) => item.pasifKaynaklar);
    this.giderKisitlamaTabloData = response[0];
  }

  private setSelectedPeriods(selectedPeriodsData: SelectPeriodData) {
    switch (selectedPeriodsData.periodType) {
      case 'aylik':
        this.selectedPeriods = [
          `${selectedPeriodsData.selectedYear}-${selectedPeriodsData.periods[0]}`,
        ];
        break;
      case 'yillik':
        this.selectedPeriods = [String(selectedPeriodsData.selectedYear)];
        break;
      default:
        this.selectedPeriods = selectedPeriodsData.periods;
        break;
    }
  }
}
