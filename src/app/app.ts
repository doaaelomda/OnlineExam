import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { AuthModule } from './../../projects/auth/src/lib/auth.module';
import { environment } from './environments/environment.';
import { AUTH_CONFIG } from '../../projects/auth/src/lib/interface/auth-config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, AuthModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  providers: [
    { provide: AUTH_CONFIG, useValue: { apiUrl: environment.apiUrl } }
  ]
})
export class App {
  protected readonly title = signal('onlineExam');
}
