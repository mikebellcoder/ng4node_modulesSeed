import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprintlpnComponent } from './reprintlpn.component';

describe('ReprintlpnComponent', () => {
  let component: ReprintlpnComponent;
  let fixture: ComponentFixture<ReprintlpnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprintlpnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprintlpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
