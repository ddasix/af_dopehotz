import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetReplyComponent } from './asset-reply.component';

describe('AssetReplyComponent', () => {
  let component: AssetReplyComponent;
  let fixture: ComponentFixture<AssetReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
