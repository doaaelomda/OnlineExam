import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { Subscription, interval } from 'rxjs';
import { HeaderDashboard } from '../dashboard/dashboard-container/header-dashboard/header-dashboard';
import { StartQuizDialogComponent } from '../../../shared/start-quiz-dialog/start-quiz-dialog';
import { QuizQuestionComponent } from '../../../shared/quiz-question/quiz-question';
import { Quiz } from '../../../core/services/quiz';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
interface Exam {
  _id: string;
  title: string;
  numberOfQuestions: number;
  duration: number; // in minutes
}

interface Question {
  text: string;
  answers: {
    text: string;
    key: string;
  }[];
}

@Component({
  selector: 'app-start-quiz',
  standalone: true,
  imports: [
    CommonModule,
    SkeletonModule,
    ButtonModule,
    HeaderDashboard,
    StartQuizDialogComponent,
    QuizQuestionComponent,
    ProgressSpinnerModule,
  ],
  templateUrl: './start-quiz.html',
  styleUrls: ['./start-quiz.scss'],
})
export class StartQuizComponent implements OnInit, OnDestroy {
  exams: Exam[] = [];
  questions: Question[] = [];
  loading = true;

  // Quiz taking state
  isTakingQuiz = false;
  currentIndex = 0;
  selectedAnswer: string | null = null;
  answers: (string | null)[] = []; // store answers for all questions
  totalQuestions = 0;

  // Timer
  timeRemainingInSeconds = 0;
  timerDisplay = '00:00';
  timerSubscription?: Subscription;

  // Dialog
  showDialog = false;
  selectedExamId!: string;
  showQuizModal = false;

  constructor(private _quiz: Quiz) {}

  ngOnInit() {
    this.getExams();
  }

  ngOnDestroy() {
    this.stopTimer();
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

  openDialog(examId: string) {
    this.selectedExamId = examId;
    this.showDialog = true;
  }

  startExam() {
    this._quiz.getExamById(this.selectedExamId).subscribe({
      next: (res: any) => {
        const examData = res;
        this.questions = examData?.questions?.map((q: any) => ({
          text: q.question,
          answers: q.answers.map((a: any) => ({
            text: a.answer,
          key: a.key,
          })),
        }));

        this.totalQuestions = this.questions.length;
        this.answers = new Array(this.totalQuestions).fill(null);

        this.currentIndex = 0;
        this.selectedAnswer = null;

        this.timeRemainingInSeconds = examData?.exam?.duration * 60;
        this.updateTimerDisplay();
        this.startTimer();
        this.showQuizModal = true;
        this.showDialog = false;
      },
    });
  }

  // Timer logic
startTimer() {
  if (this.timerSubscription) return;

  this.timerSubscription = interval(1000).subscribe(() => {
    if (this.timeRemainingInSeconds > 0) {
      this.timeRemainingInSeconds--;
      this.updateTimerDisplay();
    } else {
      this.stopTimer();
      this.submitQuiz();
    }
  });
}


  stopTimer() {
    this.timerSubscription?.unsubscribe();
  }

  updateTimerDisplay() {
    const minutes = Math.floor(this.timeRemainingInSeconds / 60);
    const seconds = this.timeRemainingInSeconds % 60;
    this.timerDisplay = `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }

  // Quiz navigation & answers
  onSelectAnswer(answerKey: string) {
    this.selectedAnswer = answerKey;
    this.answers[this.currentIndex] = answerKey;
  }

  goNext() {
    if (this.currentIndex < this.totalQuestions - 1) {
      this.currentIndex++;
      this.selectedAnswer = this.answers[this.currentIndex];
    }
  }

  goBack() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.selectedAnswer = this.answers[this.currentIndex];
    }
  }

  submitQuiz() {
    this.stopTimer();
    this.isTakingQuiz = false;
  }

  get currentQuestionAnswers() {
    return this.questions[this.currentIndex]?.answers || [];
  }
}
