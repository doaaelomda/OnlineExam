import { HttpClientModule } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputText } from '../../../shared/input-text/input-text';
import { CommonModule } from '@angular/common';
import { ButtonShared } from '../../../shared/button/button';
import { InputPassword } from '../../../shared/input-password/input-password';
import { RouterLink } from '@angular/router';
import { AuthOnlineService } from '../../../core/services/auth-online-service';
import { AuthModule } from '../../../../../projects/auth/src/lib/auth.module';
import { environment } from '../../../environments/environment.';
import { AUTH_CONFIG } from '../../../../../projects/auth/src/lib/interface/auth-config';
import { AuthService } from '../../../../../projects/auth/src/lib/services/AuthService';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    InputText,
    ReactiveFormsModule,
    CommonModule,
    ButtonShared,
    InputPassword,
    RouterLink,
    AuthModule,
    HttpClientModule,
    
  ],
  providers: [
    { provide: AUTH_CONFIG, useValue: { apiUrl: environment.apiUrl } },
    AuthService,
    AuthOnlineService,
  ],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss'],
})
export class LoginPage {
  loginForm!: FormGroup;
  ValidationRequired = [{ key: 'required', message: 'This field is required' }];
  constructor(
    private fb: FormBuilder,
    private _AuthOnlineService: AuthOnlineService,
    private messageService: MessageService
  ) {
    this.initialForm();
  }

  initialForm() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const payload = { ...this.loginForm.value };
    this._AuthOnlineService.signInUser(payload).subscribe((res: any) => {
      debugger;
      if (res.message == 'success') {
        this.messageService.add({
          severity: 'success',
          summary: 'success',
          detail: 'user login is done',
          life: 3000,
        });
        this.loginForm.reset()
      }
      else{
        this.messageService.add({
          severity: 'error',
          summary: 'error',
          detail: 'user login is faild',
          life: 3000,
        });
        this.loginForm.reset()

      }
    });
  }
}
