import { TestBed, inject } from '@angular/core/testing';

import { ParcelDebuggerService } from './parcel-debugger.service';

describe('ParcelDebuggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParcelDebuggerService]
    });
  });

  it('should ...', inject([ParcelDebuggerService], (service: ParcelDebuggerService) => {
    expect(service).toBeTruthy();
  }));
});
