import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletenewComponent } from './completenew.component';

describe('CompletenewComponent', () => {
  let component: CompletenewComponent;
  let fixture: ComponentFixture<CompletenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
