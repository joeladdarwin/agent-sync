import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderaddressComponent } from './orderaddress.component';

describe('OrderaddressComponent', () => {
  let component: OrderaddressComponent;
  let fixture: ComponentFixture<OrderaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
