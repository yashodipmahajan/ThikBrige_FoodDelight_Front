import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/api/auth/login/login.service';
import { LocalstorageService } from 'src/app/core/services/local-storage/localstorage.service';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private loginservice: LoginService,
    private snackBarService: SnackbarService,
    private router: Router,
    private localService: LocalstorageService
  ) {}

  async ngOnInit() {
    this.checkInlocalstorage();
  }

  checkInlocalstorage() {
    if (this.localService.getJsonValue('token') != '') {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  validateLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.userLogin();
  }

  userLogin(): void {
    this.loginservice.adminLogin(this.loginForm.value).subscribe({
      next: (response: any) => {
        console.log('login response.....', response);
        this.snackBarService.showSuccessSnackBar('Login Successful!');
        this.router.navigate(['/admin/dashboard']);
      },
      error: (err: any) => {
        this.snackBarService.showErrorSnackbar('Invalid Username or Password');
      },
    });
  }

  navigateRegister() {
    this.router.navigate(['/register']);
  }
}
