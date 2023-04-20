import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilsensorComponent } from './soilsensor.component';

describe('SoilsensorComponent', () => {
  let component: SoilsensorComponent;
  let fixture: ComponentFixture<SoilsensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoilsensorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoilsensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
