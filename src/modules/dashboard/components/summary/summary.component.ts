import { Component, OnInit } from '@angular/core';
import { Company } from '@firmalar/mdoels/company.interface';
import { GlobalStore } from '@store/global.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  inputs: ['score', 'profitAndDebit'],
  host: {
    class: 'row',
  },
})
export class SummaryComponent implements OnInit {
  score: number;
  profitAndDebit: number;
  company$: Observable<Company>;
  constructor(globalStore: GlobalStore) {
    this.company$ = globalStore.selectedCompany$;
  }

  ngOnInit(): void {}
}
