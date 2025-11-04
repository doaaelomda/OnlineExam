import { Routes } from '@angular/router';
import { routesLogin } from './features/auth/authRouting';
export const routes: Routes = [{ path: '', children: routesLogin }];
