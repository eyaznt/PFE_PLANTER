import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserplantersComponent } from './userplanters.component';

describe('UserplantersComponent', () => {
  let component: UserplantersComponent;
  let fixture: ComponentFixture<UserplantersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserplantersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserplantersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
