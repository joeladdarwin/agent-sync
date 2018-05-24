import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsentComponent } from './loginsent.component';

describe('LoginsentComponent', () => {
  let component: LoginsentComponent;
  let fixture: ComponentFixture<LoginsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
