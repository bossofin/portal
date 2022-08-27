import { Component, OnInit } from '@angular/core';
import { RaporlarService } from '@raporlar/business/raporlar.service';
import { RaporItem } from '@raporlar/model/rapor-item.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-return-raporu',
  templateUrl: './return-raporu.component.html',
  styleUrls: ['./return-raporu.component.scss'],
})
export class ReturnRaporuComponent implements OnInit {
  returnRaporu$: Observable<RaporItem[] | Observable<null>>;
  constructor(private raporService: RaporlarService) {
    this.returnRaporu$ = raporService.getDataByKey('returnAnaliz');
  }
  ngOnInit(): void {}
}
