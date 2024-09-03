import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant/add-restaurant.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants/all-restaurants.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsRoutingModule, ReactiveFormsModule],
})
export class ComponentsModule {}
