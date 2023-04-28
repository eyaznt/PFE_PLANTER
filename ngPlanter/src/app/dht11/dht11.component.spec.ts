import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dht11Component } from './dht11.component';

describe('Dht11Component', () => {
  let component: Dht11Component;
  let fixture: ComponentFixture<Dht11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dht11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dht11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
