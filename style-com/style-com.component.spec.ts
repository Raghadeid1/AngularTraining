import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleComComponent } from './style-com.component';

describe('StyleComComponent', () => {
  let component: StyleComComponent;
  let fixture: ComponentFixture<StyleComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
