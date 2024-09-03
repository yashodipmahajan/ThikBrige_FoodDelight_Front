import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant/add-restaurant.component';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants/all-restaurants.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'add-restaurant',
    component: AddRestaurantComponent,
  },
  {
    path: 'all-restaurants',
    component: AllRestaurantsComponent,
  },
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
