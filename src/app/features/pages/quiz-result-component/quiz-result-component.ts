// quiz-result.component.ts
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-quiz-result',
  imports:[ButtonModule],
    templateUrl: './quiz-result-component.html',
  styleUrl: './quiz-result-component.scss',
})
export class QuizResultComponent {
  @Input() correct: number = 0;
  @Input() incorrect: number = 0;
  circumference = 2 * Math.PI * 16;

  get score(): number {
    const total = this.correct + this.incorrect;
    return total ? Math.round((this.correct / total) * 100) : 0;
  }
}
