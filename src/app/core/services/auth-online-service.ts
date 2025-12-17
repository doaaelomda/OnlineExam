import { authService } from './../../../../projects/auth/src/lib/auth-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { AuthService } from '../../../../projects/auth/src/lib/services/AuthService';
import { userInfo } from '../modal/user';
import { userResponseLogin } from '../modal/response';
import { environment } from '../../environments/environment.';
import { RegisterUser } from '../modal/registerInfo';

@Injectable({
  providedIn: 'root',
})
export class AuthOnlineService {
  constructor(private http: HttpClient,private auth:authService) {}

  signInUser(userInfo: userInfo): Observable<userResponseLogin> {
    return this.auth.SignIn(userInfo);
  }

  signUpUser(RegisterUser: RegisterUser): Observable<userResponseLogin> {
    return this.auth.signUp(RegisterUser);
  }
}
