import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonShared } from '../../../shared/button/button';
import { InputText } from '../../../shared/input-text/input-text';
import { CommonModule } from '@angular/common';
import { AuthOnlineService } from '../../../core/services/auth-online-service';

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

  constructor(private fb: FormBuilder,private _router:Router,private AuthOnlineService:AuthOnlineService) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

    onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
    } else {
      const paylod={...this.loginForm.value}
      this.AuthOnlineService.sendOtp(paylod).subscribe((res:any)=>{
        this._router.navigate(['/verifyCode']);
      })
    }
  }

}
