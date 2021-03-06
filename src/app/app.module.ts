import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button'; 
import { MenuComponent } from './components/menu/menu.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ResolutionsPageComponent } from './pages/resolutions-page/resolutions-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {CookieService} from 'ngx-cookie-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FavouritesPageComponent } from './pages/favourites-page/favourites-page.component'
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { LogoutBtnComponent } from './components/logout-btn/logout-btn.component';
import {MatRadioModule} from '@angular/material/radio'; 
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SubmitIssueComponent } from './components/submit-issue/submit-issue.component';
import { SubmitComponent } from './pages/submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardPageComponent,
    ResolutionsPageComponent,
    UsersPageComponent,
    LoginPageComponent,
    FavouritesPageComponent,
    LogoutBtnComponent,
    ProfilePageComponent,
    SubmitIssueComponent,
    SubmitComponent
    
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    FontAwesomeModule,
    MatTableModule,
    HttpClientModule,
    MatRadioModule,
    CommonModule,
    NgbModule
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
