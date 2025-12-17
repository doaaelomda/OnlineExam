import { Routes } from '@angular/router';
import { routesLogin } from './features/auth/Routing';
export const routes: Routes = [{ path: '', children: routesLogin }];
