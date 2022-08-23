import { Component, OnInit } from '@angular/core';
import { RaporlarService } from '@raporlar/business/raporlar.service';
import { RaporItem } from '@raporlarModel/rapor-item.interface';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-operasyonel-karlilik-raporu',
  templateUrl: './operasyonel-karlilik-raporu.component.html',
  styleUrls: ['./operasyonel-karlilik-raporu.component.scss'],
})
export class OperasyonelKarlilikRaporuComponent implements OnInit {
  selectedReport$: BehaviorSubject<string>;
  brutKarMarji$: Observable<RaporItem[] | Observable<null>>;
  faaliyetGiderlerininNetSatislaraOrani$: Observable<
    RaporItem[] | Observable<null>
  >;
  faaliyetKarMarji$: Observable<RaporItem[] | Observable<null>>;
  netKarMarji$: Observable<RaporItem[] | Observable<null>>;

  constructor(raporService: RaporlarService) {
    this.selectedReport$ = raporService.selectedReport$;
    this.brutKarMarji$ = raporService.getDataByKey('brutKarMarji');
    this.faaliyetGiderlerininNetSatislaraOrani$ = raporService.getDataByKey(
      'faaliyetGiderlerininNetSatislaraOrani'
    );
    this.faaliyetKarMarji$ = raporService.getDataByKey('faaliyetKarMarji');
    this.netKarMarji$ = raporService.getDataByKey('netKarMarji');
  }

  ngOnInit(): void {}
}
