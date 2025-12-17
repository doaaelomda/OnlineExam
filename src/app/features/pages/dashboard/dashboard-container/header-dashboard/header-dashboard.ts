import { Component } from '@angular/core';
import { SearchInput } from '../../../../../shared/search-input/search-input';
import { ButtonShared } from '../../../../../shared/button/button';

@Component({
  selector: 'app-header-dashboard',
  imports: [SearchInput,ButtonShared],
  templateUrl: './header-dashboard.html',
  styleUrl: './header-dashboard.scss',
  standalone: true,
})
export class HeaderDashboard {

}
