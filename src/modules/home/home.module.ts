import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MainMenuModule } from '@main-menu/main-menu.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderModule } from '@header/header.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MainMenuModule, HeaderModule],
})
export class HomeModule {}
