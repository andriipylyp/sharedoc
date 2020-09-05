import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ResolutionsPageComponent } from './pages/resolutions-page/resolutions-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { FavouritesPageComponent } from './pages/favourites-page/favourites-page.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'favourites', component: FavouritesPageComponent },
  { path: 'resolutions', component: ResolutionsPageComponent },
  { path: 'users', component: UsersPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
