import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  host: {
    class: 'row',
  },
})
export class SummaryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
