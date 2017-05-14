import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParceldebuggerComponent } from './parceldebugger.component';

describe('ParceldebuggerComponent', () => {
  let component: ParceldebuggerComponent;
  let fixture: ComponentFixture<ParceldebuggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParceldebuggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParceldebuggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
