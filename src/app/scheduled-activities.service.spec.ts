import { TestBed } from '@angular/core/testing';

import { ScheduledActivitiesService } from './scheduled-activities.service';

describe('ScheduledActivitiesService', () => {
  let service: ScheduledActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduledActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
