import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Accept': 'text/html' })
};

@Injectable()
export class TopRestaurantService {

public url = 'https://green-duck-82.localtunnel.me/get_top_restaurants_quarter_qy/';
public quater = 'quarter1';
public year = '2017';

  constructor(private http: HttpClient) { }

  getTopRestaurants() {
    console.log(this.url + this.quater + '/' + this.year);
    return this.http.get(this.url + this.quater + '/' + this.year);
  }
}
