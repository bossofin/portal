import { Component, OnInit } from '@angular/core';
import { ifMizanItemByCodeRange } from '@custom-utils/if-mizan-item-by-range.util';
import { makeImmutable } from '@custom-utils/make-immutable.util';
import {
  FinansalDurumTablosuActiveData,
  FinansalDurumTablosuDonenVarliklar,
  FinansalDurumTablosuDuranVarliklar,
} from '@finanaslAnalizler/models/finansal-durum-tablosu-active-data.interface';
import { FinansalDurumTablosuItem } from '@finanaslAnalizler/models/finansal-durum-tablosu-item.interface';

@Component({
  selector: 'app-aktif-varliklar-table',
  templateUrl: './aktif-varliklar-table.component.html',
  styleUrls: ['./aktif-varliklar-table.component.scss'],
  inputs: ['activeItems', 'periods'],
})
export class AktifVarliklarTableComponent implements OnInit {
  periods: string[];
  private _activeItems: FinansalDurumTablosuActiveData[];
  public get activeItems(): FinansalDurumTablosuActiveData[] {
    return this._activeItems;
  }
  public set activeItems(value: FinansalDurumTablosuActiveData[]) {
    this._activeItems = value;
    if (value) {
      this.donenVarliklar = this.activeItems.map((item) => item.donenVarliklar);
      this.duranVarliklar = this.activeItems.map((item) => item.duranVarliklar);
    }
  }
  toggleDonenVarliklar: boolean = false;
  toggleHazirDegerler: boolean = false;
  toggleMenkulKiymetler: boolean = false;
  toggleTicariAlacaklar: boolean = false;
  toggleDigerAlacaklar: boolean = false;
  toggleStoklar: boolean = false;
  toggleYillaraYayginInsaatVeOnarimMaliyetleri: boolean = false;
  toggleGelecekAylaraAitGiderlerVeGelirTahakkuklari: boolean = false;
  toggleDigerDonenVarliklar: boolean = false;

  toggleDuranVarliklar: boolean = false;
  toggleTicariAlacaklarDuran: boolean = false;
  toggleDigerAlacaklarDuran: boolean = false;
  toggleMaliDuranVarliklar: boolean = false;
  toggleMaddiDuranVarliklar: boolean = false;
  toggleMaddiOlmayanDuranVarliklar: boolean = false;
  toggleOzelTukenmeyeTabiVarliklar: boolean = false;
  toggleGelecekYillaraAitGiderlerVeGelirlerTahakkuklari: boolean = false;

  donenVarliklar: FinansalDurumTablosuDonenVarliklar[];
  duranVarliklar: FinansalDurumTablosuDuranVarliklar[];

  constructor() {}

  ngOnInit(): void {}
}
