import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonShared } from '../../../shared/button/button';
import { InputPassword } from '../../../shared/input-password/input-password';
import { Router, RouterLink } from '@angular/router';
import { AuthOnlineService } from '../../../core/services/auth-online-service';
import { InputText } from "../../../shared/input-text/input-text";

@Component({
  selector: 'app-set-password',
  imports: [ReactiveFormsModule, CommonModule, ButtonShared, InputPassword, RouterLink, InputText],
  templateUrl: './set-password.html',
  styleUrl: './set-password.scss',
})
export class SetPassword {

  psswordForm: FormGroup;
  ValidationRequired = [
  { key: 'required', message: 'This field is required' },
];

  constructor(private fb: FormBuilder,private _AuthOnlineService:AuthOnlineService,private _router :Router) {
    this.psswordForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      newPassword: new FormControl('',[Validators.required]),
    });
  }

  onSubmit() {
    debugger
    if (this.psswordForm.invalid) {
      this.psswordForm.markAllAsTouched()
    } else {
      const payload={...this.psswordForm.value}
      this._AuthOnlineService.resetPassword(payload).subscribe((res:any)=>{
        this._router.navigate(['/login']);
      })
    }
  }
}
