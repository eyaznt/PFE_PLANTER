import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersControllComponent } from './users-controll.component';

describe('UsersControllComponent', () => {
  let component: UsersControllComponent;
  let fixture: ComponentFixture<UsersControllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersControllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersControllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
