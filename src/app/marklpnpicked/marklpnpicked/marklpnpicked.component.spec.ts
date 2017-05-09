import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarklpnpickedComponent } from './marklpnpicked.component';

describe('MarklpnpickedComponent', () => {
  let component: MarklpnpickedComponent;
  let fixture: ComponentFixture<MarklpnpickedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarklpnpickedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarklpnpickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
