import { Component, OnInit } from '@angular/core';
import { RaporlarService } from '@raporlar/business/raporlar.service';
import { RaporItem } from '@raporlarModel/rapor-item.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-varlik-ve-kaynak-raporu',
  templateUrl: './varlik-ve-kaynak-raporu.component.html',
  styleUrls: ['./varlik-ve-kaynak-raporu.component.scss'],
})
export class VarlikVeKaynakRaporuComponent implements OnInit {
  selectedReport$: BehaviorSubject<string>;
  borclanmaOrani$: Observable<RaporItem[] | Observable<null>>;
  kaldiracOrani$: Observable<RaporItem[] | Observable<null>>;
  faizKarsilamaGucu$: Observable<RaporItem[] | Observable<null>>;
  finansalBorcKarsilamaOrani$: Observable<RaporItem[] | Observable<null>>;
  sabitKiymetOrani$: Observable<RaporItem[] | Observable<null>>;
  aktifDevirHizi$: Observable<RaporItem[] | Observable<null>>;
  constructor(raporService: RaporlarService) {
    this.selectedReport$ = raporService.selectedReport$;
    this.borclanmaOrani$ = raporService.getDataByKey('borclanmaOrani');
    this.kaldiracOrani$ = raporService.getDataByKey('kaldiracOrani');
    this.faizKarsilamaGucu$ = raporService.getDataByKey('faizKarsilamaGucu');
    this.finansalBorcKarsilamaOrani$ = raporService.getDataByKey(
      'finansalBorcKarsilamaOrani'
    );
    this.sabitKiymetOrani$ = raporService.getDataByKey('sabitKiymetOrani');
    this.aktifDevirHizi$ = raporService.getDataByKey('aktifDevirHizi');
  }

  ngOnInit(): void {}
}
