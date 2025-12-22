import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start-quiz-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule],
  templateUrl: './start-quiz-dialog.html',
  styleUrl:'./start-quiz-dialog.scss'
})
export class StartQuizDialogComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() start = new EventEmitter<void>();

  close() {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  startQuiz() {
    this.start.emit();
  }
}
