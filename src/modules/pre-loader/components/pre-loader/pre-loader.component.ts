import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-loader',
  templateUrl: './pre-loader.component.html',
  styleUrls: ['./pre-loader.component.scss'],
  host: {
    class: 'position-fixed pre-loader',
  },
})
export class PreLoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
