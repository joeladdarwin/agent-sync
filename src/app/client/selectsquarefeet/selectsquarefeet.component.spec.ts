import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectsquarefeetComponent } from './selectsquarefeet.component';

describe('SelectsquarefeetComponent', () => {
  let component: SelectsquarefeetComponent;
  let fixture: ComponentFixture<SelectsquarefeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectsquarefeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectsquarefeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
