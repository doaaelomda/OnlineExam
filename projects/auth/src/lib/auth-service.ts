import { Injectable } from '@angular/core';
import { authApi } from './base/auth-api';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { authEndPoint } from './Enums/auth.end-point';
import { authApiAdaptorService } from './adaptor/auth-api-adaptor';

@Injectable({
  providedIn: 'root',
})
export class authService implements authApi {
  constructor(private http: HttpClient, private authApiAdaptorService: authApiAdaptorService) {}
  SignIn(data?: any): Observable<any> {
    return this.http.post(authEndPoint.SignIn, data)
  }

  signUp(data?: any): Observable<any> {
    return this.http.post(authEndPoint.SignUp, data)
  }
}
