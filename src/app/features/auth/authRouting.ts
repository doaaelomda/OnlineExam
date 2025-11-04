import { Routes } from '@angular/router';
import { LoginPage } from './loginPage/login-page';

export const routesLogin: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login',component:LoginPage,},

];
