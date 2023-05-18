import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightsensorComponent } from './lightsensor.component';

describe('LightsensorComponent', () => {
  let component: LightsensorComponent;
  let fixture: ComponentFixture<LightsensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightsensorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightsensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
