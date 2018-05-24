import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalnotesComponent } from './additionalnotes.component';

describe('AdditionalnotesComponent', () => {
  let component: AdditionalnotesComponent;
  let fixture: ComponentFixture<AdditionalnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
