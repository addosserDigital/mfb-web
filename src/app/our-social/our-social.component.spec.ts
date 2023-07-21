import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSocialComponent } from './our-social.component';

describe('OurSocialComponent', () => {
  let component: OurSocialComponent;
  let fixture: ComponentFixture<OurSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
