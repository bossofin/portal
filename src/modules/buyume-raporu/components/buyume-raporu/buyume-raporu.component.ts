import { Component, OnInit } from '@angular/core';
import { RaporlarService } from '@raporlar/business/raporlar.service';
import { RaporItem } from '@raporlarModel/rapor-item.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buyume-raporu',
  templateUrl: './buyume-raporu.component.html',
  styleUrls: ['./buyume-raporu.component.scss'],
})
export class BuyumeRaporuComponent /* implements OnInit */ {
  constructor(private reportService: RaporlarService) {
    /* reportService.growThrateReport().subscribe(console.log); */
  }
  /* dropwDownData = [
    {
      name: 'Brüt Kar Marjı',
      value: 'brutKarMarji',
    },
    {
      name: 'Faaliyet Gİderlerinin Net Satışlara Oranı',
      value: 'faaliyetGiderlerininNetSatislaraOrani',
    },
    {
      name: 'Faaliyet Kar Marjı',
      value: 'faaliyetKarMarji',
    },
    {
      name: 'Net Kar Marjı',
      value: 'netKarMarji',
    },
  ];
  selectedRapor: string = this.dropwDownData[0].value;
  brutKarMarji$: Observable<RaporItem[] | Observable<null>>;
  faaliyetGiderlerininNetSatislaraOrani$: Observable<
    RaporItem[] | Observable<null>
  >;
  faaliyetKarMarji$: Observable<RaporItem[] | Observable<null>>;
  netKarMarji$: Observable<RaporItem[] | Observable<null>>;

  constructor(private raporService: RaporlarService) {}

  ngOnInit(): void {
    this.brutKarMarji$ = this.raporService.getDataByKey('brutKarMarji');
    this.faaliyetGiderlerininNetSatislaraOrani$ =
      this.raporService.getDataByKey('faaliyetGiderlerininNetSatislaraOrani');
    this.faaliyetKarMarji$ = this.raporService.getDataByKey('faaliyetKarMarji');
    this.netKarMarji$ = this.raporService.getDataByKey('netKarMarji');
  } */
}
