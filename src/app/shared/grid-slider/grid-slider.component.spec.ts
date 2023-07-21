import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSliderComponent } from './grid-slider.component';

describe('GridSliderComponent', () => {
  let component: GridSliderComponent;
  let fixture: ComponentFixture<GridSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
