import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
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
import { Router, RouterLink } from '@angular/router';
import { AuthOnlineService } from '../../../core/services/auth-online-service';
import { MessageService } from 'primeng/api';
import { userResponseLogin } from '../../../core/modal/response';
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
    // AuthModule,
    HttpClientModule,
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
    private messageService: MessageService,
    private _router: Router
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

  this._AuthOnlineService.SignInUser(payload).subscribe({
    next: (res: userResponseLogin) => {
      if (!res || !res.token) {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Invalid login response',
          life: 3000,
        });
        return;
      }
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user));
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'User login is done',
        life: 3000,
      });
      this._router.navigate(['/home']);
      this.loginForm.reset();
    },

    error: (err) => {
      console.error('login error', err);

      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: err?.error?.message || 'Login failed',
        life: 3000,
      });
    }
  });
}

}
