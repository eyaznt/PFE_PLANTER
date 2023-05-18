import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsControllComponent } from './plants-controll.component';

describe('PlantsControllComponent', () => {
  let component: PlantsControllComponent;
  let fixture: ComponentFixture<PlantsControllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantsControllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantsControllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
