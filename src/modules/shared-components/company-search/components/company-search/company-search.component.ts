import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Company } from '@firmalar/mdoels/company.interface';
import { UserService } from '@kullanicilar/business/user.service';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  startWith,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.scss'],
  outputs: ['onSearch'],
})
export class CompanySearchComponent implements OnInit {
  onSearch = new EventEmitter<Company>();
  userSearchControl = new FormControl();
  filteredOptions$: Observable<Company[]>;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.filteredOptions$ = this.userSearchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((value: string) => {
        if (typeof value === 'string') {
          if (value.length >= 3) {
            return this.userService.getCompanies(value);
          }
        }

        return [];
      })
    );
  }
  displayWith(value: any) {
    return value?.companyName;
  }
  onCompanySelect(event: MatAutocompleteSelectedEvent) {
    this.onSearch.emit(event.option.value);
  }
}
