import { Component, OnInit } from '@angular/core';
import { AuthOnlineService } from '../../../core/services/auth-online-service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-quiz-history',
  standalone: true,
  imports: [ProgressSpinnerModule],
  templateUrl: './quiz-history.html',
  styleUrl: './quiz-history.scss',
})
export class accountSettings implements OnInit {

  historyData: any = null;
  loading: boolean = false;

  constructor(private authOnlineService: AuthOnlineService) {}

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory() {
    this.loading = true;

    this.authOnlineService.getHistory().subscribe({
      next: (res: any) => {
        this.historyData = res?.data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.historyData = null;
        this.loading = false;
      }
    });
  }
}
