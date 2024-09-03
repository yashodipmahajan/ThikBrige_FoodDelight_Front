import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/components-routing.module').then(
        (m) => m.ComponentsRoutingModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
  {
    path: '**', // Wildcard route for a 404 page
    redirectTo: '', // Redirect to home or a 404 component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
