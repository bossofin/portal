import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableToggleArrowsComponent } from './components/table-toggle-arrows/table-toggle-arrows.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TableToggleArrowsComponent],
  imports: [CommonModule, MatIconModule],
  exports: [TableToggleArrowsComponent],
})
export class TableToggleArrowsModule {}
