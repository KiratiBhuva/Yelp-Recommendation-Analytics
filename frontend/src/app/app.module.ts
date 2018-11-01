import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginOwnerComponent } from './login-owner/login-owner.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { RegisterOwnerComponent } from './register-owner/register-owner.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import {TopRestaurantService} from "./top-restaurant.service";
import { UserRecommendationService } from "./user-recommendation.service";
import { UserFilterService} from "./user-filter.service";
import { TopRestaurantsComponent } from './top-restaurants/top-restaurants.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register_user',
    component: RegisterUserComponent
  },
  {
    path: 'register_owner',
    component: RegisterOwnerComponent
  },
  {
    path: 'dashboard_user',
    component: DashboardUserComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginUserComponent,
    LoginOwnerComponent,
    RegisterUserComponent,
    HomeComponent,
    RegisterOwnerComponent,
    DashboardUserComponent,
    RestaurantCardComponent,
    TopRestaurantsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [TopRestaurantService,
              UserRecommendationService,
              UserFilterService],

  bootstrap: [AppComponent]
})
export class AppModule { }
