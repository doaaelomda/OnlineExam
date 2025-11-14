import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConfig, AUTH_CONFIG } from '../interface/auth-config';

@Injectable()
export class LANGInterceptor implements HttpInterceptor {
  constructor(@Inject(AUTH_CONFIG) private config: AuthConfig) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const lang = this.config.defaultLanguage || 'en';
    const clonedReq = req.clone({
      setHeaders: {
        'Accept-Language': lang
      }
    });
    return next.handle(clonedReq);
  }
}
