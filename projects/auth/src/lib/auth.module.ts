import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/AuthService';
import { LANGInterceptor } from './interceptors/lang.interceptor';
import { StatusInterceptor } from './interceptors/status.interceptor';
import { AuthConfig, AUTH_CONFIG } from './interface/auth-config';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    AuthService,
  ],
})
export class AuthModule {
  static forRoot(config: AuthConfig): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        { provide: AUTH_CONFIG, useValue: config },  // ✅ This is correct
        { provide: HTTP_INTERCEPTORS, useClass: LANGInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: StatusInterceptor, multi: true },
      ],
    };
  }
}

