import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderunitComponent } from './orderunit.component';

describe('OrderunitComponent', () => {
  let component: OrderunitComponent;
  let fixture: ComponentFixture<OrderunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
