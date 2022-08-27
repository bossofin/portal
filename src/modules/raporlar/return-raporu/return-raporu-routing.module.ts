import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReturnRaporuComponent } from './components/return-raporu/return-raporu.component';

const routes: Routes = [
  {
    path: '',
    component: ReturnRaporuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnRaporuRoutingModule {}
