import { authService } from './../../../../projects/auth/src/lib/auth-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userInfo } from '../modal/user';
import { userResponseLogin } from '../modal/response';
import { RegisterUser } from '../modal/registerInfo';

@Injectable({
  providedIn: 'root',
})
export class AuthOnlineService {
  constructor(private auth: authService) {}

  SignInUser(userInfo: userInfo): Observable<userResponseLogin> {
    return this.auth.SignIn(userInfo) as Observable<userResponseLogin>;
  }

  signUpUser(registerUser: RegisterUser): Observable<userResponseLogin> {
    return this.auth.signUp(registerUser) as Observable<userResponseLogin>;
  }
}
