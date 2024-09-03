import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/core/services/local-storage/localstorage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  constructor(
    private localService: LocalstorageService,
    private router: Router
  ) {}
  async ngOnInit() {
    this.checkInlocalstorage();
  }

  checkInlocalstorage() {
    if (this.localService.getJsonValue('token') != '') {
      this.router.navigate(['/admin/dashboard']);
    }
  }
}
