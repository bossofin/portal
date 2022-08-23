import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BuyumeRaporuService {
  constructor(private http: HttpClient) {}
  growThrateReport() {
    /* const selectedPeriodsUrlString = new SelectPeriodReturnData(
      this.selectedPeriods,
      true
    ).getURLString();
    return this.http.get<RaporApiResponse[]>(
      `${this.api}/growthratereport/6490519109?${selectedPeriodsUrlString}`
    ); */
  }
}
