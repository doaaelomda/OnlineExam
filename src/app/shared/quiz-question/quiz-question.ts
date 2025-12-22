import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
export interface QuizOption {
  text: string;
  selected?: boolean;
}

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.html',
  styleUrls: ['./quiz-question.scss'],
  standalone: true,
  imports: [
    // PrimeNG Modules
    CommonModule,
    ButtonModule,
    DialogModule
  ],
})
export class QuizQuestionComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Input() questionText: string = '';
  @Input() options: QuizOption[] = [];
  @Input() currentQuestion: number = 1;
  @Input() totalQuestions: number = 20;
  @Input() timeRemaining: string = '00:00'; 
  @Input() selectedOption: string | null = null;

  @Output() optionSelect = new EventEmitter<string>();
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  onOptionChange(value: string) {
    this.optionSelect.emit(value);
  }

  onNext() {
    this.next.emit();
  }

  onBack() {
    this.back.emit();
  }

  close() {
  // this.visible = false;
  this.visibleChange.emit(false);
}
}