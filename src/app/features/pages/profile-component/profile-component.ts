import { Component } from '@angular/core';
import { InputText } from '../../../shared/input-text/input-text';
import { PhoneNumberInputComponent } from '../../../shared/phone-number-input/phone-number-input';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthOnlineService } from '../../../core/services/auth-online-service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ButtonShared } from '../../../shared/button/button';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-profile-component',
  imports: [
    InputText,
    PhoneNumberInputComponent,
    ReactiveFormsModule,
    ButtonShared,
    ConfirmPopupModule,
    ToastModule,
    ButtonModule,
    DialogModule,
  ],
  providers: [ConfirmationService, MessageService, DialogModule],
  templateUrl: './profile-component.html',
  styleUrl: './profile-component.scss',
})
export class ProfileComponent {
  form!: FormGroup;
  ValidationRequired = [{ key: 'required', message: 'This field is required' }];

  constructor(
    private fb: FormBuilder,
    private _AuthOnlineService: AuthOnlineService,
    private _router: Router,
    private messageService: MessageService
  ) {
    this.initialForm();
  }

  visible: boolean = false;

  initialForm() {
    this.form = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    } else {
      const payload = {
        ...this.form.value,
        phone: this.form.value.phone?.toString() || '',
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
            this.form.reset();
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
            this.form.reset();
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Something went wrong',
              life: 3000,
            });
          }
        },
      });
    }
  }

  openPoup() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    } else {
      this.visible = true;
    }
  }
  deleteAccount() {
    this._AuthOnlineService.deleteAccount().subscribe((res: any) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'User Account is Delete',
        life: 3000,
      });
      this._router.navigate(['login']);
    });
  }
}
