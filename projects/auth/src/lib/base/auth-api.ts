import { Observable } from 'rxjs';

export abstract class authApi {
  abstract SignIn(data?: any): Observable<any>;
//   abstract SignUp(data?: any): Observable<any>;
//   abstract changePassword(data?: any): Observable<any>;
//   abstract resetPassword(data?: any): Observable<any>;
//   abstract verifyResetCode(data?: any): Observable<any>;
//   abstract forgotPassword(data?: any): Observable<any>;
//   abstract logout(data?: any): Observable<any>;
//   abstract editProfile(data?: any): Observable<any>;
//   abstract deleteMe(data?: any): Observable<any>;
}
