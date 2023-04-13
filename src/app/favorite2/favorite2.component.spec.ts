import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Favorite2Component } from './favorite2.component';

describe('Favorite2Component', () => {
  let component: Favorite2Component;
  let fixture: ComponentFixture<Favorite2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Favorite2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Favorite2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
