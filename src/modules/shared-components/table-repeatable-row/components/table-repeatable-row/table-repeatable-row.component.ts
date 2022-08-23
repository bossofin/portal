import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-repeatable-row',
  templateUrl: './table-repeatable-row.component.html',
  styleUrls: ['./table-repeatable-row.component.scss'],
  inputs: ['text', 'data', 'pathKey', 'valueKey'],
  host: {
    class: 'tr',
  },
})
export class TableRepeatableRowComponent implements OnInit {
  data: any[];
  text: string;
  pathKey: string;
  valueKey: string;
  constructor() {}

  ngOnInit(): void {}
}
