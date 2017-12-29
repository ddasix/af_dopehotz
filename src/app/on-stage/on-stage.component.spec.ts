import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnStageComponent } from './on-stage.component';

describe('OnStageComponent', () => {
  let component: OnStageComponent;
  let fixture: ComponentFixture<OnStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
