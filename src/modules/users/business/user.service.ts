import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Company } from '@firmalar/mdoels/company.interface';
import { User } from '@kullanicilar/models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private api = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getCompanies(companyName: string) {
    return this.http.get<Company[]>(
      `${this.api}/company/${companyName}/0/1000`
    );
  }
  getUsersByCompanyId(companyId: number) {
    return this.http.get<User[]>(`${this.api}/user/_/${companyId}/0/1000`);
  }
}
