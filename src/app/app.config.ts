import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { provideHttpClient } from '@angular/common/http';
import {provideStore} from '@ngrx/store'
import {provideEffects} from '@ngrx/effects'
import { counterReducer } from './store/counter/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    provideToastr({ positionClass: 'toast-top-right', timeOut: 3000 }),
    provideHttpClient(),
    MessageService,
    provideStore({
      elevateCounter:counterReducer
    }),
    provideEffects()
  ],
};
