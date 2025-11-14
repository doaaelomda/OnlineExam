import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonShared } from '../../../shared/button/button';
import { InputText } from '../../../shared/input-text/input-text';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule,RouterLink,ButtonShared,InputText,CommonModule],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.scss',
})
export class ForgetPassword {

    loginForm: FormGroup;
  ValidationRequired = [
  { key: 'required', message: 'This field is required' },
];

  constructor(private fb: FormBuilder,private _router:Router) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

    onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
      console.log('Form Data:', this.loginForm.value);
    } else {
      console.log('Form Invalid');
       this._router.navigate(['/verifyCode']);
    }
  }

}
