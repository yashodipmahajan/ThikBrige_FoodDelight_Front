import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/core/api/restaurant/restaurant.service';
import { LocalstorageService } from 'src/app/core/services/local-storage/localstorage.service';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.css'],
})
export class AllRestaurantsComponent {
  constructor(
    private restaurantService: RestaurantService,
    private snackBarService: SnackbarService,
    private localService: LocalstorageService,
    private router: Router
  ) {}
  restaurantsTable: Array<{
    id: number;
    createdAt: string;
    name: number;
    description: string;
    location: string;
  }> = [];

  async ngOnInit() {
    this.getAllRestaurants();
    this.checkInlocalstorage();
  }

  checkInlocalstorage() {
    if (this.localService.getJsonValue('token') == '') {
      this.router.navigate(['']);
    }
  }
  getAllRestaurants() {
    this.restaurantService.AllRestaurants().subscribe({
      next: (response: any) => {
        console.log('restaurants..', response);
        this.restaurantsTable = response.body;
      },
      error: (err: any) => {
        this.snackBarService.showErrorSnackbar('Unknown Erorr Occured');
      },
    });
  }

  deleteRestaurant(id: number) {
    const idAsString = id.toString();
    this.restaurantService.DeleteRestaurant(idAsString).subscribe({
      next: (response: any) => {
        console.log('delete restaurant..', response);
        window.location.reload();
        this.snackBarService.showSuccessSnackBar(
          'Restaurant Deleted Successfullly'
        );
      },
      error: (err: any) => {
        this.snackBarService.showErrorSnackbar('Unknown Erorr Occured');
      },
    });
  }
}
