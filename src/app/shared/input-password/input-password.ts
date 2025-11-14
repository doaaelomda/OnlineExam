import { CommonModule } from '@angular/common';
import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

import { Validation } from '../../core/modal/validators';

@Component({
  selector: 'app-input-password',
  imports: [ ReactiveFormsModule,CommonModule,PasswordModule],
  templateUrl: './input-password.html',
  styleUrl: './input-password.scss',
  standalone:true

})
export class InputPassword implements OnChanges {

  // Inputs
  placeholder = input<string>();
  Validation = input<Validation[]>();
  controlNameInput = input.required<string>();
  inputLabel = input<string>();
  control = input.required<AbstractControl>();

  // Internal state
  currentControl!: FormControl;
  currentPlaceHolder: string = '';
  currentValidations: Validation[] = [];
  label: string = '';
  controlName: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['controlNameInput']?.currentValue) {
      this.controlName = changes['controlNameInput'].currentValue;
    }
    if (changes['placeholder']?.currentValue) {
      this.currentPlaceHolder = changes['placeholder'].currentValue;
    }
    if (changes['inputLabel']?.currentValue) {
      this.label = changes['inputLabel'].currentValue;
    }
    if (changes['Validation']?.currentValue) {
      this.currentValidations = changes['Validation'].currentValue;
    }
    if (changes['control']?.currentValue) {
      this.currentControl = changes['control'].currentValue as FormControl;
    }
  }

}

