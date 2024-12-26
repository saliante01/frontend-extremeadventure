import { TestBed } from '@angular/core/testing';

import { AceptregistrationService } from './aceptregistration.service';

describe('AceptregistrationService', () => {
  let service: AceptregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AceptregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
