import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/api/admin/admin.service';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/core/services/local-storage/localstorage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registrationForm = new FormGroup({
    fullname: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(/(?=.*[A-Z])/), // at least one capital letter
      Validators.pattern(/(?=.*[!@#$%^&*])/), // at least one special character
    ]),
    confirmPassword: new FormControl('', Validators.required),
  });

  constructor(
    private adminservice: AdminService,
    private snackBarService: SnackbarService,
    private router: Router,
    private localService: LocalstorageService
  ) {}
  validateUser(): void {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    this.addUser();
  }

  async ngOnInit() {
    this.checkInlocalstorage();
  }

  checkInlocalstorage() {
    if (this.localService.getJsonValue('token') != '') {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  addUser() {
    const { confirmPassword, ...userData } = this.registrationForm.value; // Exclude confirmPassword destructuring assignment
    this.adminservice.addAdmin(userData).subscribe({
      next: (response: any) => {
        console.log('User registered successfully', response);
        this.registrationForm.reset();
        this.snackBarService.showSuccessSnackBar(
          'User Registered Successfully!'
        );
        this.navigateLogin();
      },
      error: (err: any) => {
        console.log('Error registering user', err);
        if (err.error.includes('Duplicate entry')) {
          this.snackBarService.showErrorSnackbar(
            'Email or Username already exists.'
          );
        } else {
          this.snackBarService.showErrorSnackbar(
            'An error occurred while registering user'
          );
        }
      },
    });
  }

  navigateLogin() {
    this.router.navigate(['/login']);
  }
}
