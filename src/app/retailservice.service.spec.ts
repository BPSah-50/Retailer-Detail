import { TestBed } from '@angular/core/testing';

import { RetailserviceService } from './retailservice.service';

describe('RetailserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetailserviceService = TestBed.get(RetailserviceService);
    expect(service).toBeTruthy();
  });
});
