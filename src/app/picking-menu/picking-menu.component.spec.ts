import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickingMenuComponent } from './picking-menu.component';

describe('PickingMenuComponent', () => {
  let component: PickingMenuComponent;
  let fixture: ComponentFixture<PickingMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickingMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
