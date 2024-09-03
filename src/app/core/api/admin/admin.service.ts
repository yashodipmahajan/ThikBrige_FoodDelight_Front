import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  adminUrl: string;
  constructor(private http: HttpClient) {
    this.adminUrl = 'http://localhost:4002/api/v1/fooddelight/admin';
  }

  // Adds User.
  addAdmin(adminData: any): Observable<any> {
    console.log('add admin...called');
    return this.http.post<any>(`${this.adminUrl}/register`, adminData, {
      observe: 'response',
    });
  }
}
