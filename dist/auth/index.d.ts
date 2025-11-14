import * as i0 from '@angular/core';
import { InjectionToken, ModuleWithProviders } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

declare class Auth {
    static ɵfac: i0.ɵɵFactoryDeclaration<Auth, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Auth, "lib-Auth", never, {}, {}, never, never, true, never>;
}

interface AuthConfig {
    apiUrl: string;
    defaultLanguage?: string;
}
declare const AUTH_CONFIG: InjectionToken<AuthConfig>;

declare class AuthModule {
    static forRoot(config: AuthConfig): ModuleWithProviders<AuthModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AuthModule, never, [typeof i1.HttpClientModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AuthModule>;
}

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    token: string;
    userId: string;
    expiresIn: number;
}

interface RegisterRequest {
    email: string;
    password: string;
    fullName: string;
}

declare class AuthService {
    private http;
    private config;
    constructor(http: HttpClient, config: AuthConfig);
    login(data: LoginRequest): Observable<LoginResponse>;
    register(data: RegisterRequest): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}

declare class LANGInterceptor implements HttpInterceptor {
    private config;
    constructor(config: AuthConfig);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LANGInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LANGInterceptor>;
}

declare class StatusInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StatusInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StatusInterceptor>;
}

export { AUTH_CONFIG, Auth, AuthModule, AuthService, LANGInterceptor, StatusInterceptor };
export type { AuthConfig, LoginRequest, LoginResponse, RegisterRequest };
