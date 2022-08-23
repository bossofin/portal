import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    class: 'h-100 row m-0',
  },
})
export class HomeComponent implements OnInit {
  toggleMenu: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.toggleMenu = window.innerWidth > 1024;
  }
  onToggleMenu(value: boolean) {
    this.toggleMenu = value || !this.toggleMenu;
  }
}
