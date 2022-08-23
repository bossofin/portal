import { Component, OnInit } from '@angular/core';
import { RaporlarService } from '@raporlar/business/raporlar.service';
import { RaporItem } from '@raporlarModel/rapor-item.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-varlik-ve-kaynak-karlilik-raporu',
  templateUrl: './varlik-ve-kaynak-karlilik-raporu.component.html',
  styleUrls: ['./varlik-ve-kaynak-karlilik-raporu.component.scss'],
})
export class VarlikVeKaynakKarlilikRaporuComponent implements OnInit {
  selectedReport$: BehaviorSubject<string>;
  ozkaynakKarliligi$: Observable<RaporItem[] | Observable<null>>;
  aktifKarlilik$: Observable<RaporItem[] | Observable<null>>;
  constructor(raporService: RaporlarService) {
    this.selectedReport$ = raporService.selectedReport$;
    this.ozkaynakKarliligi$ = raporService.getDataByKey('ozkaynakKarliligi');
    this.aktifKarlilik$ = raporService.getDataByKey('aktifKarlilik');
  }

  ngOnInit(): void {}
}
