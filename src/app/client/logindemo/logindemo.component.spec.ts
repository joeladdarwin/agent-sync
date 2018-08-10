import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindemoComponent } from './logindemo.component';

describe('LogindemoComponent', () => {
  let component: LogindemoComponent;
  let fixture: ComponentFixture<LogindemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogindemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
