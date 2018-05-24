import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertysizeComponent } from './propertysize.component';

describe('PropertysizeComponent', () => {
  let component: PropertysizeComponent;
  let fixture: ComponentFixture<PropertysizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertysizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertysizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
