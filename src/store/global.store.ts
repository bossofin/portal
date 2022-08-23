import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface GlobalState {
  isLoading: boolean;
}

const initialState: GlobalState = {
  isLoading: false,
};

@Injectable()
export class GlobalStore extends ComponentStore<GlobalState> {
  constructor() {
    super(initialState);
  }
  isLoading$ = this.select((state) => state.isLoading);
}
