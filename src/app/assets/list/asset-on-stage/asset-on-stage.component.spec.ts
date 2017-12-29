import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetOnStageComponent } from './asset-on-stage.component';

describe('AssetOnStageComponent', () => {
  let component: AssetOnStageComponent;
  let fixture: ComponentFixture<AssetOnStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetOnStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetOnStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
