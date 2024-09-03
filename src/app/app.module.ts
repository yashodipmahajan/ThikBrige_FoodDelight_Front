import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/components/register/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SnackbarComponent } from './standalone-components/snackbar/snackbar/snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './auth/components/login/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant/add-restaurant.component';
import { AllRestaurantsComponent } from './components/all-restaurants/all-restaurants/all-restaurants.component';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AddRestaurantComponent,
    AllRestaurantsComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SnackbarComponent,
    MatSnackBarModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
