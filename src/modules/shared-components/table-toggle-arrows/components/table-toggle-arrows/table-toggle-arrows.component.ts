import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-toggle-arrows',
  templateUrl: './table-toggle-arrows.component.html',
  styleUrls: ['./table-toggle-arrows.component.scss'],
  inputs: ['text', 'condition'],
  host: {
    class: 'd-flex',
  },
})
export class TableToggleArrowsComponent implements OnInit {
  text: string;
  condition: boolean;
  constructor() {}

  ngOnInit(): void {}
}
