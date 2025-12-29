import { Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Navbar } from '../navbar/navbar';
import { Router, RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { AuthOnlineService } from '../../../core/services/auth-online-service';

@Component({
  selector: 'app-quiz-history',
  standalone: true,
  imports: [ProgressSpinnerModule, RouterOutlet, RouterLink,RouterModule],
  templateUrl: './quiz-history.html',
  styleUrl: './quiz-history.scss',
})
export class accountSettings  {

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
