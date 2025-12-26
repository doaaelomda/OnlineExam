import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab-view',
  imports: [TabViewModule,DropdownModule,FormsModule],
  standalone:true,
  templateUrl: './tab-view.html',
  styleUrl: './tab-view.scss',
})
export class TabView {
  myValue=''
  //   languages = [
  //   { label: 'English', value: 'en' },
  //   { label: 'Arabic', value: 'ar' },
  // ];

  selectedLanguage = { label: 'English', value: 'en' };
  onLanguageChange() {
  }
  activeIndex = 0; // 0 = Sign in , 1 = Register


  constructor(private router: Router) {}

  onTabChange(event: any) {
    if (event.index === 0) {
      this.router.navigate(['/login']);
    } else if (event.index === 1) {
      this.router.navigate(['/register']);
    }
  }

}
