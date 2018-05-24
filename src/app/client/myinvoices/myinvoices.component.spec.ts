import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinvoicesComponent } from './myinvoices.component';

describe('MyinvoicesComponent', () => {
  let component: MyinvoicesComponent;
  let fixture: ComponentFixture<MyinvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyinvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
