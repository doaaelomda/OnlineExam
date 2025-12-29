import { Component } from '@angular/core';
import { InputText } from '../../../shared/input-text/input-text';
import { PhoneNumberInputComponent } from '../../../shared/phone-number-input/phone-number-input';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonShared } from '../../../shared/button/button';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputPassword } from '../../../shared/input-password/input-password';
import { AuthOnlineService } from '../../../core/services/auth-online-service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-change-password-component',
  imports: [
    InputPassword,
    ReactiveFormsModule,
    ButtonShared,
    ButtonModule,
    DialogModule,],
  templateUrl: './change-password-component.html',
  styleUrl: './change-password-component.scss',
})
export class ChangePasswordComponent {
  form!: FormGroup;
  ValidationRequired = [{ key: 'required', message: 'This field is required' }];

  constructor(
    private fb: FormBuilder,
    private _AuthOnlineService: AuthOnlineService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.initialForm();
  }

  visible: boolean = false;

  initialForm() {
    this.form = this.fb.group({
      oldPassword: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
      rePassword: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    } else {
      const payload = {
        ...this.form.value,
      };
      this._AuthOnlineService.changePassword(payload).subscribe({
        next: (res: any) => {
          if (res.message === 'success') {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'User Change Password',
              life: 3000,
            });
            this.router.navigate(['login'])
          }
        },
      });
    }
  }
}
