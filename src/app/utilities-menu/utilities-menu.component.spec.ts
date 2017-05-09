import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesMenuComponent } from './utilities-menu.component';

describe('UtilitiesMenuComponent', () => {
  let component: UtilitiesMenuComponent;
  let fixture: ComponentFixture<UtilitiesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilitiesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitiesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
