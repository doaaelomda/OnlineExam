import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTH_CONFIG, AuthConfig } from '../interface/auth-config';
import { userInfo } from '../interface/login-request';
import { LoginResponse } from '../interface/login-response';
import { RegisterUser } from '../interface/register-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient,
  @Inject(AUTH_CONFIG) private config: AuthConfig) {}

  signInUser(userInfo: userInfo, apiUrl?: string): Observable<LoginResponse> {
    const url = apiUrl ? apiUrl : this.config.apiUrl;
    return this.http.post<LoginResponse>(url, userInfo);
  }

  signUpUser(RegisterUser: RegisterUser, apiUrl?: string): Observable<any> {
    const url = apiUrl ? apiUrl : this.config.apiUrl;
    return this.http.post<any>(url, RegisterUser);
  }
}
