import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConfig, AUTH_CONFIG } from '../interface/auth-config';
import { LoginRequest } from '../interface/login-request';
import { LoginResponse } from '../interface/login-response';
import { RegisterRequest } from '../interface/register-request';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject(AUTH_CONFIG) private config: AuthConfig
  ) {}

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.config.apiUrl}/login`, data);
  }

  register(data: RegisterRequest): Observable<any> {
    return this.http.post<any>(`${this.config.apiUrl}/register`, data);
  }
}
