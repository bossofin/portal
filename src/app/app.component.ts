import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalStore } from 'src/store/global.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading$: Observable<boolean>;
  constructor(globalStore: GlobalStore) {
    this.isLoading$ = globalStore.isLoading$;
  }
}
