import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPostComponent } from './asset-post.component';

describe('AssetPostComponent', () => {
  let component: AssetPostComponent;
  let fixture: ComponentFixture<AssetPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
