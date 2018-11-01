import { Component, OnInit } from '@angular/core';
import { Input} from "@angular/core";

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {

  @Input() restaurant;
  @Input() cardId;
  @Input() parentId;
  public categories;
  public checked_stars = 0;
  public unchecked_stars = 0;

  constructor() { }

  ngOnInit() {
    this.categories = this.restaurant.categories.split(', ');
    this.categories.sort();
    this.checked_stars = this.restaurant.stars;
    this.unchecked_stars = 5 - this.checked_stars;
  }

}
