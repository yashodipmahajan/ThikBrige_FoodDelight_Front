import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  restaurantUrl: string;
  constructor(private http: HttpClient) {
    this.restaurantUrl =
      'http://localhost:4002/api/v1/fooddelight/admin/restaurant';
  }

  // Adds Restaurant.
  addRestaurant(restaurantData: any): Observable<any> {
    console.log('add admin...called');
    return this.http.post<any>(
      `${this.restaurantUrl}/add-restaurant`,
      restaurantData,
      {
        observe: 'response',
      }
    );
  }
  //ALL Restaurants
  AllRestaurants(): Observable<any> {
    console.log('all restaurants... called');
    return this.http.get<any>(`${this.restaurantUrl}/all-restaurants`, {
      observe: 'response',
    });
  }

  //DELETE Restaurant

  DeleteRestaurant(id: string): Observable<any> {
    console.log('delete restaurant... called');
    return this.http.delete<any>(
      `${this.restaurantUrl}/${id}/delete-restaurant`,
      {
        observe: 'response',
      }
    );
  }
}
