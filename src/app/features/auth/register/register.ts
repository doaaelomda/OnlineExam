import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputText } from '../../../shared/input-text/input-text';
import { CommonModule } from '@angular/common';
import { ButtonShared } from '../../../shared/button/button';
import { InputPassword } from '../../../shared/input-password/input-password';
import { PhoneNumberInputComponent } from '../../../shared/phone-number-input/phone-number-input';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [InputText, ReactiveFormsModule, CommonModule, ButtonShared, InputPassword, PhoneNumberInputComponent,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  registerForm: FormGroup;
  ValidationRequired = [
  { key: 'required', message: 'This field is required' },
  { key: 'email', message: 'Invalid email address' }
];

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
      email: new FormControl('',),
      password: new FormControl('',[Validators.required]),
      confirmpassword: new FormControl('', [Validators.required]),
      phoneNumber:new FormControl( null)
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Data:', this.registerForm.value);
    } else {
      console.log('Form Invalid');
    }
  }
}
