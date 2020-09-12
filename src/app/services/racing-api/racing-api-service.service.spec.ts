import { TestBed } from '@angular/core/testing';
import { RacingApiServiceService } from './racing-api-service.service';

describe('RacingApiServiceService', () => {
  let service: RacingApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacingApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
