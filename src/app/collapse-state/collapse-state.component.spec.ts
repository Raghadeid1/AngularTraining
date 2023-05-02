import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseStateComponent } from './collapse-state.component';

describe('CollapseStateComponent', () => {
  let component: CollapseStateComponent;
  let fixture: ComponentFixture<CollapseStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
