import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetOpenMicComponent } from './asset-open-mic.component';

describe('AssetOpenMicComponent', () => {
  let component: AssetOpenMicComponent;
  let fixture: ComponentFixture<AssetOpenMicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetOpenMicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetOpenMicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
