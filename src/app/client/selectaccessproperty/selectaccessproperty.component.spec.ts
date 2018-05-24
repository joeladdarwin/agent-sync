import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectaccesspropertyComponent } from './selectaccessproperty.component';

describe('SelectaccesspropertyComponent', () => {
  let component: SelectaccesspropertyComponent;
  let fixture: ComponentFixture<SelectaccesspropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectaccesspropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectaccesspropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
