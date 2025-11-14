import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../projects/auth/src/lib/services/AuthService';
import { userInfo } from '../modal/user';
import { userResponseLogin } from '../modal/response';
import { environment } from '../../environments/environment.';
import { RegisterUser } from '../modal/registerInfo';

@Injectable({
  providedIn: 'root',
})
export class AuthOnlineService {
  private SignInUrl: string = environment.apiUrl + 'auth/signIn';
  private SignUpUrl: string = environment.apiUrl + 'auth/signup';
  constructor(private auth: AuthService, private http: HttpClient) {}

  signInUser(userInfo: userInfo): Observable<userResponseLogin> {
    return this.auth.signInUser(userInfo, this.SignInUrl);
  }

  signUpUser(RegisterUser: RegisterUser): Observable<userResponseLogin> {
    return this.auth.signUpUser(RegisterUser, this.SignUpUrl);
  }
}
