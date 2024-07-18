import { TestBed } from '@angular/core/testing';

import { WorkoutServiceTsService } from './workout.service.ts.service';

describe('WorkoutServiceTsService', () => {
  let service: WorkoutServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
