import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { MuavinApiPayload } from '../models/muavin-api-payload.interface';
import { Muavin } from '../models/muavin.interface';

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
  }: MuavinApiPayload) {
    return this.http.get<Muavin[]>(`${this.api}/subsidiaryledger/6490519109?`, {
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
