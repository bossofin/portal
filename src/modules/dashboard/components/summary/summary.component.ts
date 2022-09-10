import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
}
