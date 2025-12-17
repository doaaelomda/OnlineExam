import { Component } from '@angular/core';
import { HeaderDashboard } from './dashboard-container/header-dashboard/header-dashboard';
import { UserInfo } from './dashboard-container/user-info/user-info';
import { QuizList } from './dashboard-container/quiz-list/quiz-list';
@Component({
  selector: 'app-dashboard',
  imports: [HeaderDashboard,UserInfo,QuizList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  standalone: true,
})
export class Dashboard {
}
