import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ResolutionsPageComponent } from './pages/resolutions-page/resolutions-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { FavouritesPageComponent } from './pages/favourites-page/favourites-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SubmitComponent } from './pages/submit/submit.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'favourites', component: FavouritesPageComponent },
  { path: 'resolutions', component: ResolutionsPageComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'submit-issue', component: SubmitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
