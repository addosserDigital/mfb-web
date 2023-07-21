import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhistleComponent } from './whistle.component';

describe('WhistleComponent', () => {
  let component: WhistleComponent;
  let fixture: ComponentFixture<WhistleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhistleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhistleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
