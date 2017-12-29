import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenMicComponent } from './open-mic.component';

describe('OpenMicComponent', () => {
  let component: OpenMicComponent;
  let fixture: ComponentFixture<OpenMicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenMicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenMicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
