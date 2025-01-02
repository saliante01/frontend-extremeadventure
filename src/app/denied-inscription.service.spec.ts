import { TestBed } from '@angular/core/testing';

import { DeniedInscriptionService } from './denied-inscription.service';

describe('DeniedInscriptionService', () => {
  let service: DeniedInscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeniedInscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
