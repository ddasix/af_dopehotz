import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTrackItemComponent } from './asset-track-item.component';

describe('AssetTrackItemComponent', () => {
  let component: AssetTrackItemComponent;
  let fixture: ComponentFixture<AssetTrackItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetTrackItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTrackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
