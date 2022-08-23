import { Component, OnInit } from '@angular/core';
import { RaporlarService } from '@raporlar/business/raporlar.service';
import { RaporItem } from '@raporlarModel/rapor-item.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-faaliyet-raporu',
  templateUrl: './faaliyet-raporu.component.html',
  styleUrls: ['./faaliyet-raporu.component.scss'],
})
export class FaaliyetRaporuComponent implements OnInit {
  selectedReport$: BehaviorSubject<string>;
  stokDevirHizi$: Observable<RaporItem[] | Observable<null>>;
  stokDevirSuresi$: Observable<RaporItem[] | Observable<null>>;
  alacakDevirHizi$: Observable<RaporItem[] | Observable<null>>;
  alacakTahsilSuresi$: Observable<RaporItem[] | Observable<null>>;
  borcDevirHizi$: Observable<RaporItem[] | Observable<null>>;
  borcOdemeSuresi$: Observable<RaporItem[] | Observable<null>>;
  isletmeSermayeDongusu$: Observable<RaporItem[] | Observable<null>>;
  constructor(raporService: RaporlarService) {
    this.selectedReport$ = raporService.selectedReport$;
    this.stokDevirHizi$ = raporService.getDataByKey('stokDevirHizi');
    this.stokDevirSuresi$ = raporService.getDataByKey('stokDevirSuresi');
    this.alacakDevirHizi$ = raporService.getDataByKey('alacakDevirHizi');
    this.alacakTahsilSuresi$ = raporService.getDataByKey('alacakTahsilSuresi');
    this.borcOdemeSuresi$ = raporService.getDataByKey('borcOdemeSuresi');
    this.borcDevirHizi$ = raporService.getDataByKey('borcDevirHizi');
    this.isletmeSermayeDongusu$ = raporService.getDataByKey(
      'isletmeSermayeDongusu'
    );
  }

  ngOnInit(): void {}
}
