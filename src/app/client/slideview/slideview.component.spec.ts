import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideviewComponent } from './slideview.component';

describe('SlideviewComponent', () => {
  let component: SlideviewComponent;
  let fixture: ComponentFixture<SlideviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
