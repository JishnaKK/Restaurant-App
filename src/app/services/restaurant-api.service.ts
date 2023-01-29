import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantApiService {

  constructor(private http:HttpClient) { }


  // get-for take datas from server
  // post-create new thing in server
  //put-entire data update
  //patch-partialy update
  //delete-data dlt

  //get all res details api call
RestaurentList(){
 return this.http.get( 'http://localhost:3000/restaurants')
}

// get only user requested restaurant
viewRestaurant(restid:any){
  return this.http.get( 'http://localhost:3000/restaurants/'+restid)
}
}
