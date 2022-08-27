import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createUrlStringByThreePeriods } from '@custom-utils/create-url-string-by-periods.util';
import { environment } from '@environment/environment';
import {
  RaporApiResponse,
  RaporKeys,
} from '@raporlarModel/rapor-api-response.interface';
import { SelectPeriodData } from '@shared-components/select-period/models/select-period-data.interface';
import { SelectPeriodReturnData } from '@shared-components/select-period/models/select-period-return-data.class';
import { BehaviorSubject, filter, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RaporlarService {
  api = environment.apiUrl;
  selectedReport$ = new BehaviorSubject<string>(null);
  selectedPeriods: SelectPeriodData;
  reportsResponse$ = new BehaviorSubject<RaporApiResponse[]>(null);
  constructor(private http: HttpClient) {}
  getRatioReport() {
    const selectedPeriodsUrlString = new SelectPeriodReturnData(
      this.selectedPeriods
    ).getURLString();
    return this.http.get<RaporApiResponse[]>(
      `${this.api}/ratioreport/6490519109?${selectedPeriodsUrlString}`
    );
  }
  getDataByKey(key: RaporKeys) {
    return this.reportsResponse$.pipe(
      map((list) => {
        if (!list) {
          return of(null);
        }
        return list.map((item) => item[key]);
      })
    );
  }
  resetData() {
    this.selectedReport$.next(null);
    this.selectedPeriods = undefined;
    this.reportsResponse$.next(null);
  }
}
