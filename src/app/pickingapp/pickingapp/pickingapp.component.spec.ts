import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickingappComponent } from './pickingapp.component';

describe('PickingappComponent', () => {
  let component: PickingappComponent;
  let fixture: ComponentFixture<PickingappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickingappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickingappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
