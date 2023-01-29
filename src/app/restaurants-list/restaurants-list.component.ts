import { Component, OnInit } from '@angular/core';
import { RestaurantApiService } from '../services/restaurant-api.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {
  RestaurantList:any
constructor(private restapi:RestaurantApiService){}

  ngOnInit(): void {
this.restapi.RestaurentList()
.subscribe((result)=>{
  console.log(result);
this.RestaurantList=result
})
  }

}
