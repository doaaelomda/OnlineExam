import { Component, OnInit } from '@angular/core';
import { HeaderDashboard } from '../dashboard/dashboard-container/header-dashboard/header-dashboard';
import { Quiz } from '../../../core/services/quiz';
import { SkeletonModule } from 'primeng/skeleton';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-start-quiz',
  imports: [HeaderDashboard, SkeletonModule,CommonModule],
  templateUrl: './start-quiz.html',
  styleUrl: './start-quiz.scss',
})
export class StartQuiz implements OnInit {
  exams: any[] = [];
  questionExam: any[] = [];
  loading: boolean = false;
  constructor(private _quiz: Quiz) {}
  ngOnInit() {
    this.getExams();
  }

  getExams() {
    this.loading = true;
    this._quiz.getExams().subscribe({
      next: (res: any) => {
        this.exams = res?.exams;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  getExamById(id: string) {
    this._quiz.getExamById(id).subscribe((res: any) => {
      this.questionExam = res?.exams;
    });
  }
}
