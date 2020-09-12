import { TestBed } from '@angular/core/testing';
import { RacingApiService } from './racing-api.service';

describe('RacingApiServiceService', () => {
  let service: RacingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
