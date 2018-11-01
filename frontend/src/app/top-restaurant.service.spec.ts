import { TestBed, inject } from '@angular/core/testing';

import { TopRestaurantService } from './top-restaurant.service';

describe('TopRestaurantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopRestaurantService]
    });
  });

  it('should be created', inject([TopRestaurantService], (service: TopRestaurantService) => {
    expect(service).toBeTruthy();
  }));
});
