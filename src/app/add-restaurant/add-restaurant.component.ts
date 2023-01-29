import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addRestaurant()
{
  alert("clicked")
}
}
