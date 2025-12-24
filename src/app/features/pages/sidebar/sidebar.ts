import { Component } from '@angular/core';
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
  activeItem = 'dashboard';

  constructor(private AuthOnlineService:AuthOnlineService,private router:Router ){}
  logout(){
    debugger
    this.AuthOnlineService.logoutUser().subscribe((res:any)=>{
      if(res){
        this.router.navigate(['/login']);
      }
    })
  }
}
