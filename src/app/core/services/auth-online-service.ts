import { authService } from './../../../../projects/auth/src/lib/auth-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userInfo } from '../modal/user';
import { userResponseLogin } from '../modal/response';
import { RegisterUser } from '../modal/registerInfo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.';

@Injectable({
  providedIn: 'root',
})
export class AuthOnlineService {
  constructor(private auth: authService,private http:HttpClient) {}

  SignInUser(userInfo: userInfo): Observable<userResponseLogin> {
    return this.auth.SignIn(userInfo) as Observable<userResponseLogin>;
  }

  signUpUser(registerUser: RegisterUser): Observable<userResponseLogin> {
    return this.auth.signUp(registerUser) as Observable<userResponseLogin>;
  }

  logoutUser(){
    return this.http.get(environment.apiUrl + '/auth/logout')
  }
}
