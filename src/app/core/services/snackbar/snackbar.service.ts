import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/standalone-components/snackbar/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}
  showSuccessSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: {
        message: message,
        iconPath: 'assets/icon/snackbar/success.png',
      },
      duration: 5000,
      panelClass: 'snackbar-success',
    });
  }

  showErrorSnackbar(error: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: {
        message: error,
        iconPath: 'assets/icon/snackbar/error.png',
      },
      duration: 5000,
      panelClass: 'snackbar-error',
    });
  }
}
