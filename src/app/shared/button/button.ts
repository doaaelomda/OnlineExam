import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-button',
  imports: [ButtonModule, RippleModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  standalone: true,
})
export class ButtonShared {
  @Input() title: string = '';
  @Output() click = new EventEmitter<void>();
  @Input() disabled :boolean=false
  
  onClick() {
    this.click.emit();
  }
}
