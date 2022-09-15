import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { ApiResponseContainer } from 'src/global';
import { Mizan } from '../models/mizan-item.interface';

@Injectable({
  providedIn: 'root',
})
export class MizanService {
  private api = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getTrialBalance(selectedPeriods: string, vkn: string) {
    return this.http.get<ApiResponseContainer<Mizan[]>>(
      `${this.api}/trialbalance/${vkn}/${selectedPeriods}`
    );
  }
}
