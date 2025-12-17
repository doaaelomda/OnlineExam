import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-navbar',
  imports: [MenubarModule],
  standalone:true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

}
