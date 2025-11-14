import * as i0 from '@angular/core';
import { Component, InjectionToken, Inject, Injectable, NgModule } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpResponse, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { tap } from 'rxjs';

class Auth {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: Auth, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.9", type: Auth, isStandalone: true, selector: "lib-Auth", ngImport: i0, template: `
    <p>
      auth works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: Auth, decorators: [{
            type: Component,
            args: [{ selector: 'lib-Auth', imports: [], template: `
    <p>
      auth works!
    </p>
  ` }]
        }] });

const AUTH_CONFIG = new InjectionToken('AUTH_CONFIG');

class AuthService {
    http;
    config;
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    login(data) {
        return this.http.post(`${this.config.apiUrl}/login`, data);
    }
    register(data) {
        return this.http.post(`${this.config.apiUrl}/register`, data);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: AuthService, deps: [{ token: i1.HttpClient }, { token: AUTH_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: AuthService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [AUTH_CONFIG]
                }] }] });

class LANGInterceptor {
    config;
    constructor(config) {
        this.config = config;
    }
    intercept(req, next) {
        const lang = this.config.defaultLanguage || 'en';
        const clonedReq = req.clone({
            setHeaders: {
                'Accept-Language': lang
            }
        });
        return next.handle(clonedReq);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: LANGInterceptor, deps: [{ token: AUTH_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: LANGInterceptor });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: LANGInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [AUTH_CONFIG]
                }] }] });

class StatusInterceptor {
    intercept(req, next) {
        return next.handle(req).pipe(tap(event => {
            if (event instanceof HttpResponse) {
                console.log('Response status:', event.status);
            }
        }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: StatusInterceptor, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: StatusInterceptor });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: StatusInterceptor, decorators: [{
            type: Injectable
        }] });

class AuthModule {
    static forRoot(config) {
        return {
            ngModule: AuthModule,
            providers: [
                AuthService,
                { provide: AUTH_CONFIG, useValue: config },
                { provide: HTTP_INTERCEPTORS, useClass: LANGInterceptor, multi: true },
                { provide: HTTP_INTERCEPTORS, useClass: StatusInterceptor, multi: true },
            ]
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: AuthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.9", ngImport: i0, type: AuthModule, imports: [HttpClientModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: AuthModule, imports: [HttpClientModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.9", ngImport: i0, type: AuthModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [HttpClientModule]
                }]
        }] });

/*
 * Public API Surface of auth
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AUTH_CONFIG, Auth, AuthModule, AuthService, LANGInterceptor, StatusInterceptor };
//# sourceMappingURL=auth.mjs.map
