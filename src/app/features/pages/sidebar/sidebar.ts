import { Component, EventEmitter, Output } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { AuthOnlineService } from '../../../core/services/auth-online-service';
@Component({
  selector: 'app-sidebar',
  imports: [SidebarModule, ButtonModule,RouterLink],
  standalone:true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
    @Output() changeHeader = new EventEmitter<string>();

  activeItem = 'dashboard';

  setActive(item: string, headerText: string) {
    this.activeItem = item;
    this.changeHeader.emit(headerText);
  }
}
