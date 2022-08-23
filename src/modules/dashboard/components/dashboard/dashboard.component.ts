import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  host: {
    class: 'd-block p-3',
  },
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
