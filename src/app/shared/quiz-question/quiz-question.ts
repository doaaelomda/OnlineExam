import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
export interface QuizOption {
  text: string;
  key: string;
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
  @Input() questionText: any = '';
  @Input() options: any;
  @Input() currentQuestion: number = 1;
  @Input() totalQuestions: number = 20;
  @Input() timeRemaining: any = '00:00'; 
  selectedOption: string | null = null;

  @Output() optionSelect = new EventEmitter<string>();
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  onOptionChange(optionKey: string) {
  this.optionSelect.emit(optionKey);
  this.selectedOption = optionKey;
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