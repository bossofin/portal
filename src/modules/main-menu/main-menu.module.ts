import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  exports: [MainMenuComponent],
})
export class MainMenuModule {}
