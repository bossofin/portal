import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Company } from '@firmalar/mdoels/company.interface';
import { CreateUserPayload } from '@kullanicilar/models/create-user-payload.interface';
import { UpdateUserPayload } from '@kullanicilar/models/update-user-payload.interface';
import { User } from '@kullanicilar/models/user.interface';
import { BehaviorSubject } from 'rxjs';
import { ApiResponseContainer } from 'src/global';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private api = environment.apiUrl;
  user: User;
  constructor(private http: HttpClient) {}
  getUserByUserName(cache: boolean = false) {
    const userName = sessionStorage.getItem('userName');
    return this.http.get<ApiResponseContainer<User>>(
      `${this.api}/user/name/${userName}`,
      {
        headers: {
          cache: cache ? '1' : undefined,
        },
      }
    );
  }
  getCompaniesByUserId(cache: boolean = false) {
    return this.http.get<ApiResponseContainer<Company[]>>(
      `${this.api}/company/user/${this.user.id}`,
      {
        headers: {
          cache: cache ? '1' : undefined,
        },
      }
    );
  }
  getCompanies(companyName: string) {
    return this.http.get<ApiResponseContainer<Company[]>>(
      `${this.api}/company/${companyName}/0/1000`
    );
  }
  getUsersByCompanyId(companyId: number) {
    return this.http.get<ApiResponseContainer<User[]>>(
      `${this.api}/user/_/${companyId}/0/1000`
    );
  }
  create(user: CreateUserPayload) {
    return this.http.post<ApiResponseContainer<User>>(`${this.api}/user`, {
      ...user,
    });
  }
  update(user: UpdateUserPayload) {
    return this.http.put<ApiResponseContainer<User>>(`${this.api}/user`, {
      ...user,
    });
  }
  delete(userId: number) {
    return this.http.delete<User>(`${this.api}/user/${userId}`);
  }
}
