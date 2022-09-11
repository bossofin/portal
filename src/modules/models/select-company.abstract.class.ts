import { Company } from '@firmalar/mdoels/company.interface';
import { GlobalStore } from '@store/global.store';
import { UnsubscribeOnDestroy } from './unsubscribe-on-destroy.abstract.class';

export abstract class SelectCompany extends UnsubscribeOnDestroy {
  selectedCompany: Company;
  constructor(globalStore: GlobalStore) {
    super();
    this.subscriptions.push(
      globalStore.selectedCompany$.subscribe((company) => {
        this.selectedCompany = company;
        if (this.selectedCompany) {
          this.onCompanySelect();
        }
      })
    );
  }
  abstract onCompanySelect(): void;
}
