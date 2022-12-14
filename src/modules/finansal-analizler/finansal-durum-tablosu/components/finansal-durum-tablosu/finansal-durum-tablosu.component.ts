import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { makeImmutable } from '@custom-utils/make-immutable.util';
import { FinansalAnalizlerService } from '@finanaslAnalizler/business/finansal-analizler.service';
import { FinansalDurumTablosuActiveData } from '@finanaslAnalizler/models/finansal-durum-tablosu-active-data.interface';
import { FinansalDurumTablosuApiResponse } from '@finanaslAnalizler/models/finansal-durum-tablosu-api-response.interface';
import { FinansalDurumTablosuPassiveData } from '@finanaslAnalizler/models/finansal-durum-tablosu-passive-data.interface';
import { SelectCompany } from '@globalModels/select-company.abstract.class';
import { SelectPeriodData } from '@shared-components/select-period/models/select-period-data.interface';
import { GlobalStore } from '@store/global.store';
import { lastValueFrom } from 'rxjs';
import * as pdfMake from 'pdfmake/build/pdfMake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
var htmlToPdfmake = require('html-to-pdfmake');
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import htmlToCanvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-finansal-durum-tablosu',
  templateUrl: './finansal-durum-tablosu.component.html',
  styleUrls: ['./finansal-durum-tablosu.component.scss'],
  host: {
    class: 'bg-white d-block rounded p-3',
  },
})
export class FinansalDurumTablosuComponent
  extends SelectCompany
  implements OnInit
{
  activeItems: FinansalDurumTablosuActiveData[];
  passiveItems: FinansalDurumTablosuPassiveData[];
  selectedPeriods: string[];
  selectedPeriodsData: SelectPeriodData;
  giderKisitlamaTabloData: FinansalDurumTablosuApiResponse;
  openAll: boolean;
  private _export: ElementRef;
  public get export(): ElementRef {
    return this._export;
  }
  @ViewChild('export') public set export(value: ElementRef) {
    this._export = value;
  }
  constructor(
    private finansalAnalizlerService: FinansalAnalizlerService,
    globalStore: GlobalStore
  ) {
    super(globalStore);
  }

  ngOnInit(): void {}
  onCompanySelect(): void {
    this.onSearch();
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
    this.activeItems = response.dataContainer.map(
      (item) => item.aktifVarliklar
    );
    this.passiveItems = response.dataContainer.map(
      (item) => item.pasifKaynaklar
    );
    this.giderKisitlamaTabloData = response.dataContainer[0];
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
  exportAsPDF() {
    this.openAll = true;
    setTimeout(() => {
      const pdfTable = this.export.nativeElement;
      htmlToCanvas(pdfTable).then((canvas) => {
        let pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'px',
          format: [canvas.width + 60, canvas.height + 60],
        });
        pdf.addImage({
          imageData: canvas.toDataURL(),
          width: canvas.width,
          height: canvas.height,
          x: 30,
          y: 30,
          format: 'JPG',
          compression: 'FAST',
        });
        pdf.save();
      });
    });
  }
}
