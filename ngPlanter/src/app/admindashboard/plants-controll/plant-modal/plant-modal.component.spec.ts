import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantModalComponent } from './plant-modal.component';

describe('PlantModalComponent', () => {
  let component: PlantModalComponent;
  let fixture: ComponentFixture<PlantModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
