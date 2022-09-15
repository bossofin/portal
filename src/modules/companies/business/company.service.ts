import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Company } from '@firmalar/mdoels/company.interface';
import { CreateCompanyPayload } from '@firmalar/mdoels/create-company-api-payload.interface';
import { UpdateCompanyPayload } from '@firmalar/mdoels/update-company-api-payload.interface';
import { ApiResponseContainer } from 'src/global';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private api = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getById(id: string = '6490519109') {
    return this.http.get(`${this.api}/company/${id}`);
  }
  getByUserId(id: string = '6490519109') {
    return this.http.get(`${this.api}/company/user/${id}`);
  }
  getByTaxNumber(taxNumber: string = '6490519109') {
    return this.http.get(`${this.api}/company/taxnumber/${taxNumber}`);
  }
  getByName(companyName: string, pageOffset: number, pageSize: number) {
    return this.http.get(
      `${this.api}/company/${companyName}/${pageOffset}/${pageSize}`
    );
  }
  getAll(pageOffset: number, pageSize: number) {
    return this.http.get<ApiResponseContainer<Company[]>>(
      `${this.api}/company/_/${pageOffset}/${pageSize}`
    );
  }
  create(company: CreateCompanyPayload) {
    return this.http.post(`${this.api}/company`, {
      ...company,
    });
  }
  update(company: UpdateCompanyPayload) {
    return this.http.put(`${this.api}/company`, {
      ...company,
    });
  }
  delete(companyId: number) {
    return this.http.delete(`${this.api}/company/${companyId}`);
  }
}
