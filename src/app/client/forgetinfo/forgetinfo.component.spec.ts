import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetinfoComponent } from './forgetinfo.component';

describe('ForgetinfoComponent', () => {
  let component: ForgetinfoComponent;
  let fixture: ComponentFixture<ForgetinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
