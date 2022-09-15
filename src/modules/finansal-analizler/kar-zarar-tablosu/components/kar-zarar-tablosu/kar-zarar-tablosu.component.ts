import { Component, OnInit } from '@angular/core';
import { makeImmutable } from '@custom-utils/make-immutable.util';
import { FinansalAnalizlerService } from '@finanaslAnalizler/business/finansal-analizler.service';
import {
  KarZararTablosuAmortismanGiderleriData,
  KarZararTablosuApiResponse,
  KarZararTablosuBrutSatislarData,
  KarZararTablosuDigerFaalGiderVeZararlarData,
  KarZararTablosuDigerFaalOlaganGiderVeKarlarData,
  KarZararTablosudonemKariVergiVeDigerYasalYukumlulukKarsiliklariData,
  KarZararTablosufaliyetGiderleriData,
  KarZararTablosufinansmanGiderleriData,
  KarZararTablosuOlagandisiGelirVeKarlarData,
  KarZararTablosuOlagandisiGiderVeZararlarData,
  KarZararTablosuSatisIndirimleriData,
  KarZarartablosuSatislarinMaliyetiData,
} from '@finanaslAnalizler/models/kar-zarar-tablosu-api-response.interface';
import { Company } from '@firmalar/mdoels/company.interface';
import { SelectCompany } from '@globalModels/select-company.abstract.class';
import { SelectPeriodData } from '@shared-components/select-period/models/select-period-data.interface';
import { GlobalStore } from '@store/global.store';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-kar-zarar-tablosu',
  templateUrl: './kar-zarar-tablosu.component.html',
  styleUrls: ['./kar-zarar-tablosu.component.scss'],
  host: {
    class: 'bg-white d-block rounded p-3',
  },
})
export class KarZararTablosuComponent extends SelectCompany implements OnInit {
  selectedPeriods: string[];
  response: KarZararTablosuApiResponse[];
  amortismanGiderleri: KarZararTablosuAmortismanGiderleriData[];
  brutSatislar: KarZararTablosuBrutSatislarData[];
  digerFaalGiderVeZararlar: KarZararTablosuDigerFaalGiderVeZararlarData[];
  digerFaalOlaganGiderVeKarlar: KarZararTablosuDigerFaalOlaganGiderVeKarlarData[];
  donemKariVergiVeDigerYasalYukumlulukKarsiliklari: KarZararTablosudonemKariVergiVeDigerYasalYukumlulukKarsiliklariData[];
  faliyetGiderleri: KarZararTablosufaliyetGiderleriData[];
  finansmanGiderleri: KarZararTablosufinansmanGiderleriData[];
  olagandisiGelirVeKarlar: KarZararTablosuOlagandisiGelirVeKarlarData[];
  olagandisiGiderVeZararlar: KarZararTablosuOlagandisiGiderVeZararlarData[];
  satisIndirimleri: KarZararTablosuSatisIndirimleriData[];
  satislarinMaliyeti: KarZarartablosuSatislarinMaliyetiData[];
  totalOfOlaganKarVeyaZarar: number[];
  totalOfFaliyetKariVeyaZarari: number[];
  totalOfBrutSatisKariVeyaZarari: number[];
  totalOfDonemKariVeyaZarari: number[];
  totalOfDonemNetKariVeyaZarari: number[];
  totalOfNetSatislar: number[];
  totalOfFAVOK: number[];
  percentageOfBrutSatisKariVeyaZarari: number[];
  percentageOfFaliyetKariVeyaZarari: number[];
  percentageOfDonemKariVeyaZarari: number[];
  percentageOfDonemNetKariVeyaZarari: number[];
  percentageOfOlaganKarVeyaZarar: number[];
  selectedPeriodsData: SelectPeriodData;
  constructor(
    private finansalAnalizlerService: FinansalAnalizlerService,
    globalStore: GlobalStore
  ) {
    super(globalStore);
  }

  ngOnInit(): void {}
  onCompanySelect(): void {
    if (!this.finansalAnalizlerService || !this.selectedPeriodsData) {
      return;
    }
    this.onSearch();
  }
  onSelectCompany(company: Company) {
    this.selectedCompany = company;
  }
  onSelectPeriod(selectedPeriodsData: SelectPeriodData) {
    this.selectedPeriodsData = selectedPeriodsData;
    this.setSelectedPeriods();
    this.onSearch();
  }
  async onSearch() {
    const request$ = this.finansalAnalizlerService.getProfitAndlossReport(
      makeImmutable(this.selectedPeriodsData),
      this.selectedCompany.taxNumber
    );
    const response = await lastValueFrom(request$);
    this.response = makeImmutable(response.dataContainer);
    this.setTableData(this.selectedPeriods);
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
  private setTableData(selectedPeriods: string[]) {
    this.selectedPeriods = makeImmutable(selectedPeriods);
    this.amortismanGiderleri = makeImmutable(
      this.response.map((item) => item.amortismanGiderleri)
    );
    this.brutSatislar = makeImmutable(
      this.response.map((item) => item.brutSatislar)
    );
    this.digerFaalGiderVeZararlar = makeImmutable(
      this.response.map((item) => item.digerFaalOlaganGiderVeZararlar)
    );
    this.digerFaalOlaganGiderVeKarlar = makeImmutable(
      this.response.map((item) => item.digerFaalOlaganGelirVeKarlar)
    );
    this.donemKariVergiVeDigerYasalYukumlulukKarsiliklari = makeImmutable(
      this.response.map(
        (item) => item.donemKariVergiVeDigerYasalYukumlulukKarsiliklari
      )
    );
    this.faliyetGiderleri = makeImmutable(
      this.response.map((item) => item.faliyetGiderleri)
    );
    this.finansmanGiderleri = makeImmutable(
      this.response.map((item) => item.finansmanGiderleri)
    );
    this.olagandisiGelirVeKarlar = makeImmutable(
      this.response.map((item) => item.olagandisiGelirVeKarlar)
    );
    this.olagandisiGiderVeZararlar = makeImmutable(
      this.response.map((item) => item.olagandisiGiderVeZararlar)
    );
    this.satisIndirimleri = makeImmutable(
      this.response.map((item) => item.satisIndirimleri)
    );
    this.satislarinMaliyeti = makeImmutable(
      this.response.map((item) => item.satislarinMaliyeti)
    );
    this.totalOfOlaganKarVeyaZarar = makeImmutable(
      this.response.map((item) => item.totalOfOlaganKarVeyaZarar)
    );
    this.totalOfNetSatislar = makeImmutable(
      this.response.map((item) => item.totalOfNetSatislar)
    );
    this.totalOfBrutSatisKariVeyaZarari = makeImmutable(
      this.response.map((item) => item.totalOfBrutSatisKariVeyaZarari)
    );
    this.totalOfFaliyetKariVeyaZarari = makeImmutable(
      this.response.map((item) => item.totalOfFaliyetKariVeyaZarari)
    );
    this.totalOfDonemKariVeyaZarari = makeImmutable(
      this.response.map((item) => item.totalOfDonemKariVeyaZarari)
    );
    this.totalOfDonemNetKariVeyaZarari = makeImmutable(
      this.response.map((item) => item.totalOfDonemNetKariVeyaZarari)
    );
    this.totalOfFAVOK = makeImmutable(
      this.response.map((item) => item.totalOfFAVOK)
    );
    this.percentageOfBrutSatisKariVeyaZarari = makeImmutable(
      this.response.map((item) => item.percentageOfBrutSatisKariVeyaZarari)
    );
    this.percentageOfDonemKariVeyaZarari = makeImmutable(
      this.response.map((item) => item.percentageOfDonemKariVeyaZarari)
    );
    this.percentageOfDonemNetKariVeyaZarari = makeImmutable(
      this.response.map((item) => item.percentageOfDonemNetKariVeyaZarari)
    );
    this.percentageOfFaliyetKariVeyaZarari = makeImmutable(
      this.response.map((item) => item.percentageOfFaliyetKariVeyaZarari)
    );
    this.percentageOfFaliyetKariVeyaZarari = makeImmutable(
      this.response.map((item) => item.percentageOfFaliyetKariVeyaZarari)
    );
    this.percentageOfOlaganKarVeyaZarar = makeImmutable(
      this.response.map((item) => item.percentageOfOlaganKarVeyaZarar)
    );
  }
}
