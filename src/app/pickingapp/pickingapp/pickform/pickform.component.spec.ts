import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickformComponent } from './pickform.component';

describe('PickformComponent', () => {
  let component: PickformComponent;
  let fixture: ComponentFixture<PickformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
