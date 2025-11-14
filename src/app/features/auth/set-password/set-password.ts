import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputText } from '../../../shared/input-text/input-text';
import { CommonModule } from '@angular/common';
import { ButtonShared } from '../../../shared/button/button';
import { InputPassword } from '../../../shared/input-password/input-password';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-set-password',
  imports: [ReactiveFormsModule,CommonModule,ButtonShared,InputPassword,RouterLink],
  templateUrl: './set-password.html',
  styleUrl: './set-password.scss',
})
export class SetPassword {

  psswordForm: FormGroup;
  ValidationRequired = [
  { key: 'required', message: 'This field is required' },
];

  constructor(private fb: FormBuilder) {
    this.psswordForm = this.fb.group({
      passwordConfirm: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),
    });
  }

  onSubmit() {
    if (this.psswordForm.valid) {
      console.log('Form Data:', this.psswordForm.value);
    } else {
      console.log('Form Invalid');
    }
  }
}
