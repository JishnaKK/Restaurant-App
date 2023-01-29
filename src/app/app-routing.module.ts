import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { ViewRestaurentComponent } from './view-restaurent/view-restaurent.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {
    path:'home',component:RestaurantsListComponent
  },
  {
    path:'view/:id',component:ViewRestaurentComponent
  },
  {
  path:'add',component:AddRestaurantComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
