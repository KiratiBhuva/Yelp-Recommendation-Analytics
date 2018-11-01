import { TestBed, inject } from '@angular/core/testing';

import { UserRecommendationService } from './user-recommendation.service';

describe('UserRecommendationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRecommendationService]
    });
  });

  it('should be created', inject([UserRecommendationService], (service: UserRecommendationService) => {
    expect(service).toBeTruthy();
  }));
});
