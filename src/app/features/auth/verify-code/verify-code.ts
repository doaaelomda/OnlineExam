import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonShared } from '../../../shared/button/button';
// import { InputOtpModule } from 'primeng/inputotp';

@Component({
  selector: 'app-verify-code',
  imports: [ReactiveFormsModule,RouterLink,ButtonShared],
  templateUrl: './verify-code.html',
  styleUrl: './verify-code.scss',
})
export class VerifyCode {

    codeForm: FormGroup;
  ValidationRequired = [
  { key: 'required', message: 'This field is required' },
];

  constructor(private fb: FormBuilder,private _router:Router) {
    this.codeForm = this.fb.group({
      otp: new FormControl('', [Validators.required]),
    });
  }

     onSubmit() {
    if (this.codeForm.invalid) {
      this.codeForm.markAllAsTouched()
      console.log('Form Data:', this.codeForm.value);
    } else {
      console.log('Form Invalid');
       this._router.navigate(['/setPassword']);
    }
  }

}
