import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  outputs: ['onToggleMenu'],
})
export class HeaderComponent implements OnInit {
  onToggleMenu = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
}
