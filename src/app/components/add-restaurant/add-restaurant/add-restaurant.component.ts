import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/core/api/restaurant/restaurant.service';
import { LocalstorageService } from 'src/app/core/services/local-storage/localstorage.service';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css'],
})
export class AddRestaurantComponent {
  constructor(
    private snackBarService: SnackbarService,
    private restaurantService: RestaurantService,
    private localService: LocalstorageService,
    private router: Router
  ) {}
  AddRestaurantForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
  });

  async ngOnInit() {
    this.checkInlocalstorage();
  }

  checkInlocalstorage() {
    if (this.localService.getJsonValue('token') == '') {
      this.router.navigate(['']);
    }
  }

  validateAddRestaurant(): void {
    if (this.AddRestaurantForm.invalid) {
      this.AddRestaurantForm.markAllAsTouched();
      return;
    }

    this.addRestaurant();
  }

  addRestaurant(): void {
    this.restaurantService
      .addRestaurant(this.AddRestaurantForm.value)
      .subscribe({
        next: (response: any) => {
          console.log('add-restaurant response.....', response);
          this.snackBarService.showSuccessSnackBar('Restaurant Added!');
          this.AddRestaurantForm.reset();
        },
        error: (err: any) => {
          this.snackBarService.showErrorSnackbar('Invalid Data');
        },
      });
  }
}
