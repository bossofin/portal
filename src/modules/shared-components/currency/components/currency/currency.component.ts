import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  inputs: ['value'],
  host: {
    class: 'd-block text-end',
  },
})
export class CurrencyComponent implements OnInit {
  value: number | string;
  constructor() {}

  ngOnInit(): void {}
}
