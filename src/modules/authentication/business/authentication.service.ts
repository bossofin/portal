import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { ApiResponseContainer } from 'src/global.d';
import { SignInResponse } from '../models/sign-in-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private api = environment.apiUrl;
  constructor(private http: HttpClient) {}
  signIn(userName: string, password: string) {
    return this.http.post<ApiResponseContainer<SignInResponse>>(
      `${this.api}/session`,
      {
        userName,
        password,
      }
    );
  }
  signOut() {
    return this.http.delete(`${this.api}/session`);
  }
  signUp() {}
}
