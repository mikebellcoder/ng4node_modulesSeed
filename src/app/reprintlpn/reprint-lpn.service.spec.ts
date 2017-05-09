import { TestBed, inject } from '@angular/core/testing';

import { ReprintLpnService } from './reprint-lpn.service';

describe('ReprintLpnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReprintLpnService]
    });
  });

  it('should ...', inject([ReprintLpnService], (service: ReprintLpnService) => {
    expect(service).toBeTruthy();
  }));
});
