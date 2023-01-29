import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { RestaurantApiService } from '../services/restaurant-api.service';

@Component({
  selector: 'app-view-restaurent',
  templateUrl: './view-restaurent.component.html',
  styleUrls: ['./view-restaurent.component.css']
})
export class ViewRestaurentComponent implements OnInit{
restid:any

restbody:any
  constructor(private activateroute:ActivatedRoute, private restService:RestaurantApiService){

  }
  ngOnInit(): void {
   this.activateroute.params.subscribe((data)=>{
// console.log(data);
this.restid=data['id']
// console.log(this.restid);

   })

  //  api call
  this.restService.viewRestaurant(this.restid)
  .subscribe((result)=>{
    console.log(result);
    this.restbody=result

  })
  }

}
