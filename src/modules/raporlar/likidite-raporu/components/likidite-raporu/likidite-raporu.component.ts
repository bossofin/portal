import { Component, OnInit } from '@angular/core';
import { RaporlarService } from '@raporlar/business/raporlar.service';
import { RaporItem } from '@raporlarModel/rapor-item.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-likidite-raporu',
  templateUrl: './likidite-raporu.component.html',
  styleUrls: ['./likidite-raporu.component.scss'],
  inputs: ['cariOran', 'likiditeOrani', 'nakitOran', 'netIsletmeSermayesi'],
})
export class LikiditeRaporuComponent implements OnInit {
  selectedReport$: BehaviorSubject<string>;
  cariOran$: Observable<RaporItem[] | Observable<null>>;
  likiditeOrani$: Observable<RaporItem[] | Observable<null>>;
  nakitOran$: Observable<RaporItem[] | Observable<null>>;
  netIsletmeSermayesi$: Observable<RaporItem[] | Observable<null>>;

  constructor(raporService: RaporlarService) {
    this.selectedReport$ = raporService.selectedReport$;
    this.cariOran$ = raporService.getDataByKey('cariOran');
    this.likiditeOrani$ = raporService.getDataByKey('likiditeOrani');
    this.nakitOran$ = raporService.getDataByKey('nakitOran');
    this.netIsletmeSermayesi$ = raporService.getDataByKey(
      'netIsletmeSermayesi'
    );
  }

  ngOnInit(): void {}
}
