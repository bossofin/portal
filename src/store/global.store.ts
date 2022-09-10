import { Injectable } from '@angular/core';
import { Company } from '@firmalar/mdoels/company.interface';
import { ComponentStore } from '@ngrx/component-store';

export interface GlobalState {
  isLoading: boolean;
  selectedCompany: Company;
}

const initialState: GlobalState = {
  isLoading: false,
  selectedCompany: undefined,
};

@Injectable()
export class GlobalStore extends ComponentStore<GlobalState> {
  constructor() {
    super(initialState);
  }
  isLoading$ = this.select((state) => state.isLoading);
  selectedCompany$ = this.select((state) => state.selectedCompany);
  setCompany(company: Company) {
    this.patchState({
      selectedCompany: company,
    });
  }
}
