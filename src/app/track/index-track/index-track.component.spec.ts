import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTrackComponent } from './index-track.component';

describe('IndexTrackComponent', () => {
  let component: IndexTrackComponent;
  let fixture: ComponentFixture<IndexTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
