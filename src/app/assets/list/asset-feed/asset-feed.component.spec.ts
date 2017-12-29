import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetFeedComponent } from './asset-feed.component';

describe('AssetFeedComponent', () => {
  let component: AssetFeedComponent;
  let fixture: ComponentFixture<AssetFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
