import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { MuavinApiPayload } from '../../mizan/models/muavin-api-payload.interface';
import { Muavin } from '../../mizan/models/muavin.interface';

@Injectable({
  providedIn: 'root',
})
export class MuavinService {
  private api = environment.apiUrl;
  constructor(private http: HttpClient) {}
  subsidiaryledger({
    count,
    mainId,
    pageNumber,
    periodEnd,
    periodStart,
    vkn,
  }: MuavinApiPayload) {
    return this.http.get<Muavin[]>(`${this.api}/subsidiaryledger/${vkn}?`, {
      params: {
        mainId,
        periodStart,
        periodEnd,
        pageNumber,
        count,
      },
    });
  }
}
