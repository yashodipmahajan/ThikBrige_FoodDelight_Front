import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { LocalstorageService } from 'src/app/core/services/local-storage/localstorage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  faRewew = faRotateRight;
  faClock = faClock;

  constructor(
    private router: Router,
    private localService: LocalstorageService
  ) {}

  async ngOnInit() {
    this.checkInlocalstorage();
  }

  checkInlocalstorage() {
    if (this.localService.getJsonValue('token') == '') {
      this.router.navigate(['']);
    }
  }

  renderToAddRestaurant() {
    console.log('addRestaurant func called..');
    this.router.navigate(['/add-restaurant']);
  }

  renderToAllRestaurant() {
    console.log('allRestaurant func called..');
    this.router.navigate(['/all-restaurants']);
  }

  logOut() {
    this.localService.clearLocalStorage();
    this.router.navigate(['']);
    console.log('logout Successfully');
  }
}
