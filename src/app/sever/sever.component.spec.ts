import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverComponent } from './sever.component';

describe('SeverComponent', () => {
  let component: SeverComponent;
  let fixture: ComponentFixture<SeverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeverComponent]
    });
    fixture = TestBed.createComponent(SeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
