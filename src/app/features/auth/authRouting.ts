import { Routes } from '@angular/router';
import { LoginPage } from './loginPage/login-page';
import { Register } from './register/register';
import { ForgetPassword } from './forget-password/forget-password';
import { AuthLayoutContainer } from './auth-layout-container/auth-layout-container';
import { VerifyCode } from './verify-code/verify-code';
import { SetPassword } from './set-password/set-password';
import { HomePage } from '../pages/home-page/home-page';

export const routesLogin: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: AuthLayoutContainer,
    children: [
      { path: 'login', component: LoginPage },
      { path: 'register', component: Register },
      { path: 'forgetPassword', component: ForgetPassword },
      { path: 'verifyCode', component: VerifyCode },
      { path: 'setPassword', component: SetPassword },
    ],
  },
  { path: 'home', component: HomePage },
];
