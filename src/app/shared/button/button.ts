import { Component, Input, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-button',
  imports: [ButtonModule, RippleModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class ButtonShared {
   @Input() title: string = '';

}
