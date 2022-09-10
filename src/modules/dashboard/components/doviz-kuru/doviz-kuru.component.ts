import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../business/dashboard.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-doviz-kuru',
  templateUrl: './doviz-kuru.component.html',
  styleUrls: ['./doviz-kuru.component.scss'],
  host: {
    class: 'd-block p-3 bg-white rounded',
  },
})
export class DovizKuruComponent implements OnInit {
  paris$: Observable<{
    eur: number;
    gbp: number;
    usd: number;
  }>;
  constructor(private dashboardService: DashboardService) {
    this.paris$ = dashboardService.getCurrencyParis();
  }

  ngOnInit(): void {}
  onRefresh() {
    this.paris$ = undefined;
    this.paris$ = this.dashboardService.getCurrencyParis();
  }
}
