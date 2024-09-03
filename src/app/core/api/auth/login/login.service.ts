import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LocalstorageService } from 'src/app/core/services/local-storage/localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  adminUrl: string;
  constructor(
    private http: HttpClient,
    private localService: LocalstorageService
  ) {
    this.adminUrl = 'http://localhost:4002/api/v1/fooddelight/admin';
  }

  // Login Admin.
  adminLogin(adminData: any): Observable<any> {
    console.log('login admin...called');
    return this.http
      .post<any>(`${this.adminUrl}/login`, adminData, {
        observe: 'response',
      })
      .pipe(
        tap((response) => {
          console.log('login response...', response);

          const token = response.body.token;
          // console.log('token', token);
          this.localService.setJsonValue('token', token);
          const fullname = response.body.loggedinAdmin.fullname;
          const email = response.body.loggedinAdmin.email;
          this.localService.setJsonValue('name', fullname);
          this.localService.setJsonValue('email', email);
          this.localService.setJsonValue(
            'admin-id',
            response.body.loggedinAdmin.id
          );
          // console.log('name', fullname);
          // console.log('email', email);
        })
      );
  }
}
