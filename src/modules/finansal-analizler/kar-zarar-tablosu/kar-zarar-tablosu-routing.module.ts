import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KarZararTablosuComponent } from './components/kar-zarar-tablosu/kar-zarar-tablosu.component';

const routes: Routes = [
  {
    path: '',
    component: KarZararTablosuComponent,
    data: {
      title: 'Kar Zarar Tablosu',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KarZararTablosuRoutingModule {}
