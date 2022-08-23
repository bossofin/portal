import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinansalDurumTablosuComponent } from './components/finansal-durum-tablosu/finansal-durum-tablosu.component';

const routes: Routes = [
  {
    path: '',
    component: FinansalDurumTablosuComponent,
    data: {
      title: 'Finansal Durum Tablosu',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinansalDurumTablosuRoutingModule {}
