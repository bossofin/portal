import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive()
export abstract class UnsubscribeOnDestroy implements OnDestroy {
  subscriptions: Subscription[] = [];
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.onDestroyHandle();
  }
  onDestroyHandle() {}
}
