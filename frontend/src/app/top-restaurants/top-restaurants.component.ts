import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-restaurants',
  templateUrl: './top-restaurants.component.html',
  styleUrls: ['./top-restaurants.component.css']
})
export class TopRestaurantsComponent implements OnInit {

  @Input() restaurants;

  constructor() { }

  ngOnInit() {
  }

}
