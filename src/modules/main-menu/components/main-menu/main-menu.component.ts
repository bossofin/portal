import { Component, EventEmitter, OnInit } from '@angular/core';
import { mainMenuData } from '@main-menu/main-menu.data';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  outputs: ['onToggleMenu'],
})
export class MainMenuComponent implements OnInit {
  onToggleMenu = new EventEmitter<boolean>();
  mainMenuData = mainMenuData;
  constructor() {}
  ngOnInit(): void {}
  onCloseMenu() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 1024) {
      this.onToggleMenu.emit(false);
    }
  }
}
