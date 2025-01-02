import { TestBed } from '@angular/core/testing';

import { FormsUpdateScheduleService } from './forms-update-schedule.service';

describe('FormsUpdateScheduleService', () => {
  let service: FormsUpdateScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsUpdateScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
