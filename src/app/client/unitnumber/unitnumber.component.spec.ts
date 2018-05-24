import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitnumberComponent } from './unitnumber.component';

describe('UnitnumberComponent', () => {
  let component: UnitnumberComponent;
  let fixture: ComponentFixture<UnitnumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitnumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
