import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './../../projects/auth/src/lib/auth.module';
import { environment } from './environments/environment.';
import { AUTH_CONFIG } from '../../projects/auth/src/lib/interface/auth-config';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    AuthModule,
    ToastModule   // ✅ Required for <p-toast>
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  providers: [
    { provide: AUTH_CONFIG, useValue: { apiUrl: environment.apiUrl } },
    MessageService
  ]
})
export class App {
  protected readonly title = signal('onlineExam');
}
