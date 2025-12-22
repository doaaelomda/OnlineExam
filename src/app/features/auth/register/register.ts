import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputText } from '../../../shared/input-text/input-text';
import { CommonModule } from '@angular/common';
import { ButtonShared } from '../../../shared/button/button';
import { InputPassword } from '../../../shared/input-password/input-password';
import { PhoneNumberInputComponent } from '../../../shared/phone-number-input/phone-number-input';
import { Router, RouterLink} from '@angular/router';
import { AuthOnlineService } from '../../../core/services/auth-online-service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  imports: [HttpClientModule,InputText, ReactiveFormsModule, CommonModule, ButtonShared, InputPassword, PhoneNumberInputComponent,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  registerForm!: FormGroup;
  ValidationRequired = [
  { key: 'required', message: 'This field is required' },
];

  constructor(private fb: FormBuilder,private _AuthOnlineService:AuthOnlineService,private messageService:MessageService,private _router:Router) {
    this.initialRegisterForm()
  }

  
  initialRegisterForm(){
        this.registerForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',[Validators.required]),
      rePassword: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      phone:new FormControl( '',Validators.required)
    });
  }

  onSubmit() {
    
    if (this.registerForm.invalid) {
      console.log('Form Data:', this.registerForm.value);
      this.registerForm.markAllAsTouched();
      return;
    } else {
   const payload = {
      ...this.registerForm.value,
      phone: this.registerForm.value.phone?.toString() || ''
    };
    this._AuthOnlineService.signUpUser(payload).subscribe({
   next: (res: any) => {
     if (res.message === 'success') {
       this.messageService.add({
         severity: 'success',
         summary: 'Success',
         detail: 'User created successfully',
         life: 3000,
       });
       this.registerForm.reset();
     }
   },
   error: (err: any) => {
     if (err.status === 409) {
       this.messageService.add({
         severity: 'error',
         summary: 'Error',
         detail: err.error?.message || 'User already exists',
         life: 3000,
       });
       this.registerForm.reset();
     } else {
       this.messageService.add({
         severity: 'error',
         summary: 'Error',
         detail: 'Something went wrong',
         life: 3000,
       });
     }
   }
 });

    }
  }
}
