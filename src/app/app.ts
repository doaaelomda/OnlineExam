import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slider } from './shared/slider/slider';
import { TabViewModule } from 'primeng/tabview';
import { LoginPage } from './features/auth/loginPage/login-page';
import { Register } from './features/auth/register/register';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Slider,TabViewModule,LoginPage,Register,DropdownModule,FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('onlineExam');
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
