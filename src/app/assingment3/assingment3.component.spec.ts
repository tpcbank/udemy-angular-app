import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assingment3Component } from './assingment3.component';

describe('Assingment3Component', () => {
  let component: Assingment3Component;
  let fixture: ComponentFixture<Assingment3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Assingment3Component]
    });
    fixture = TestBed.createComponent(Assingment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
