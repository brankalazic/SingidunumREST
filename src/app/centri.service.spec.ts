import { TestBed } from '@angular/core/testing';

import { CentriService } from './centri.service';

describe('CentriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CentriService = TestBed.get(CentriService);
    expect(service).toBeTruthy();
  });
});
