import { Component, OnInit } from '@angular/core';
import { mizanCodesRanges } from '@constants/mizan-code-ranges';
import {
  FinansalDurumTablosuKisaVadeliYabanciKaynaklar,
  FinansalDurumTablosuOzKaynaklar,
  FinansalDurumTablosuPassiveData,
  FinansalDurumTablosuUzunVadeliYabanciKaynaklar,
} from '@finanaslAnalizler/models/finansal-durum-tablosu-passive-data.interface';

@Component({
  selector: 'app-pasif-varliklar-table',
  templateUrl: './pasif-varliklar-table.component.html',
  styleUrls: ['./pasif-varliklar-table.component.scss'],
  inputs: ['passiveItems', 'periods'],
})
export class PasifVarliklarTableComponent implements OnInit {
  ozkaynaklarCodes = mizanCodesRanges.ozKaynaklar;
  uzunVadeliYabanciKaynakCodes = mizanCodesRanges.uzunVadeliYabanciKaynak;
  kisaVadeliYabanciKaynaklarCodes = mizanCodesRanges.kisaVadeliYabanciKaynaklar;

  periods: string[];
  private _passiveItems: FinansalDurumTablosuPassiveData[];
  public get passiveItems(): FinansalDurumTablosuPassiveData[] {
    return this._passiveItems;
  }
  public set passiveItems(value: FinansalDurumTablosuPassiveData[]) {
    this._passiveItems = value;
    if (value) {
      this.kisaVadeliYabanciKaynaklar = this.passiveItems.map(
        (item) => item.kisaVadeliYabanciKaynaklar
      );
      this.ozKaynaklar = this.passiveItems.map((item) => item.ozKaynaklar);
      this.uzunVadeliYabanciKaynaklar = this.passiveItems.map(
        (item) => item.uzunVadeliYabanciKaynaklar
      );
    }
  }
  kisaVadeliYabanciKaynaklar: FinansalDurumTablosuKisaVadeliYabanciKaynaklar[];
  ozKaynaklar: FinansalDurumTablosuOzKaynaklar[];
  uzunVadeliYabanciKaynaklar: FinansalDurumTablosuUzunVadeliYabanciKaynaklar[];

  toggleKisaVadeliYabanciKaynaklar: boolean = false;
  toggleMaliBorclar: boolean = false;
  toggleTicariBorclar: boolean = false;
  toggleDigerBorclar: boolean = false;
  toggleAlinanAvanslar: boolean = false;
  toggleYillaraYayginInsaatVeOnarimHakedisBedelleri: boolean = false;
  toggleOdenecekVergiVeDigerYukumlulukler: boolean = false;
  toggleBorcVeGiderKarsiliklari: boolean = false;
  toggleGelecekAylaraAitGiderVeGelirTahakkuklari: boolean = false;
  toggleDigerKisaVadeliYabanciKaynaklar: boolean = false;

  toggleUzunVadeliYabanciKaynaklar: boolean = false;
  toggleUzunVadeliMaliBorclar: boolean = false;
  toggleUzunVadeliTicariBorclar: boolean = false;
  toggleUzunVadeliDigerBorclar: boolean = false;
  toggleUzunVadeliAlinanAvanslar: boolean = false;
  toggleUzunVadeliBorcVeGiderKarsiliklari: boolean = false;
  toggleGelecekYillaraAitGiderVeGelirTahakkuklari: boolean = false;
  toggleDigerUzunVadeliYabanciKaynaklar: boolean = false;

  toggleOzKaynaklar: boolean = false;
  toggleOdenmisSermaye: boolean = false;
  toggleSermayeYedekleri: boolean = false;
  toggleKarYedekleri: boolean = false;
  toggleGecmisYillarKarlari: boolean = false;
  toggleGgecmisYillarZararlari: boolean = false;
  toggleDonemNetKarZarari: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
