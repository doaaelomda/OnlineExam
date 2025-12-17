import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    ToastModule   // ✅ Required for <p-toast>
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
   providers: [MessageService]
})
export class App {
  protected readonly title = signal('onlineExam');
}
