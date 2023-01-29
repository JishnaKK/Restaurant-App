import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewRestaurentComponent } from './view-restaurent/view-restaurent.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';




@NgModule({
  declarations: [
    AppComponent,
    RestaurantsListComponent,
    HeaderComponent,
    FooterComponent,
    ViewRestaurentComponent,
    AddRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
