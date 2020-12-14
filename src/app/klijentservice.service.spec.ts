import { TestBed } from '@angular/core/testing';

import { KlijentserviceService } from './klijentservice.service';

describe('KlijentserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KlijentserviceService = TestBed.get(KlijentserviceService);
    expect(service).toBeTruthy();
  });
});
