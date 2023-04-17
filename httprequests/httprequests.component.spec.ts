import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttprequestsComponent } from './httprequests.component';

describe('HttprequestsComponent', () => {
  let component: HttprequestsComponent;
  let fixture: ComponentFixture<HttprequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttprequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttprequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
