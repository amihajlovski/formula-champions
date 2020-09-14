import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { results } from 'src/app/_mocks_/results';
import { environment } from 'src/environments/environment';
import { RacingApiService } from './racing-api.service';

describe('RacingApiServiceService', () => {
  let service: RacingApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RacingApiService],
    });
    service = TestBed.inject(RacingApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get driver standings', () => {
    const year = 2015;
    service.getResultsForYear(year).subscribe((data) => {
      expect(data).toBeTruthy('No championships returned');
      expect(data.Races).toBeTruthy();

      const { season, position, Races, Champion } = data;

      expect(season).toEqual(year.toString(), 'Wrong year retrieved');
      expect(position).toEqual('1');
      expect(Races.length).toEqual(19);
    });

    const req = httpTestingController.expectOne(
      `${environment.racingApiEndpoint}/${year}/results/1.json`
    );
    expect(req.request.method).toEqual('GET');

    req.flush(results);
  });

  it('should get results for year', () => {
    const year = 2015;
    service.getResultsForYear(year).subscribe((data) => {
      expect(data).toBeTruthy('No championships returned');
      expect(data.Races).toBeTruthy();

      const { season, position, Races, Champion } = data;

      expect(season).toEqual(year.toString(), 'Wrong year retrieved');
      expect(position).toEqual('1');
      expect(Races.length).toEqual(19);
    });

    const req = httpTestingController.expectOne(
      `${environment.racingApiEndpoint}/${year}/results/1.json`
    );
    expect(req.request.method).toEqual('GET');

    req.flush(results);
  });
});
