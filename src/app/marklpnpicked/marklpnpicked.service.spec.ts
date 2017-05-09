import { TestBed, inject } from '@angular/core/testing';

import { MarklpnpickedService } from './marklpnpicked.service';

describe('MarklpnpickedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarklpnpickedService]
    });
  });

  it('should ...', inject([MarklpnpickedService], (service: MarklpnpickedService) => {
    expect(service).toBeTruthy();
  }));
});
