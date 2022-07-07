import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private auth: Auth,
    private toast: HotToastService,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.authService
      .login(
        this.auth,
        this.loginForm.value.email,
        this.loginForm.value.password
      )
      .then(() => {
        this.authService.isLoggedin = true;
        this.toast.success('User logged in successfully');
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        this.toast.error(error.message);
      });
  }
}
