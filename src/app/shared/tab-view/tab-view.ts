import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { Register } from '../../features/auth/register/register';
import { LoginPage } from '../../features/auth/loginPage/login-page';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab-view',
  imports: [TabViewModule,DropdownModule,RouterLink,FormsModule],
  standalone:true,
  templateUrl: './tab-view.html',
  styleUrl: './tab-view.scss',
})
export class TabView {
  myValue=''
    languages = [
    { label: 'English', value: 'en' },
    { label: 'Arabic', value: 'ar' },
  ];

  selectedLanguage = { label: 'English', value: 'en' };
  onLanguageChange() {
    console.log('Language changed to:', this.selectedLanguage.value);
  }

}
