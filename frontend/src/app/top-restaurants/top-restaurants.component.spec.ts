import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRestaurantsComponent } from './top-restaurants.component';

describe('TopRestaurantsComponent', () => {
  let component: TopRestaurantsComponent;
  let fixture: ComponentFixture<TopRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
