import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickscreenComponent } from './pickscreen.component';

describe('PickscreenComponent', () => {
  let component: PickscreenComponent;
  let fixture: ComponentFixture<PickscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
