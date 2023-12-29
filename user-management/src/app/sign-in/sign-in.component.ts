import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { SagInput } from '@micro-app/ui';
import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenStoreFacade } from '@micro-app/app-store';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterLink,
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    forwardRef(() => SagInput),
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
],
  selector: 'micro-app-sign-in',
  templateUrl: 'sign-in.component.html',
})
export class SignInComponent {
  isLoggedIn$ = this.authenStoreFacade.isLogin$;
  loginFormGroup: FormGroup = new FormGroup({
    userName: new FormControl(''),
    pass: new FormControl(''),
    rememberMe: new FormControl(false),
  });
  constructor(private authenStoreFacade: AuthenStoreFacade) {}


  login() {
    this.authenStoreFacade.login()
    this.authenStoreFacade.navigate(['home'])
  }
}
