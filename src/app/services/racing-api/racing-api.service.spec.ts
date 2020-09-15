import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { champion } from 'src/app/_mocks_/champion';
import { driverStandings } from 'src/app/_mocks_/driverStandings';
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

  it('should get driver standings from 2005 to 2015', () => {
    const fromYear = 2005;
    const toYear = 2015;

    const offset = 55;
    const limit = 11;

    service.getDriverStandings(offset, limit).subscribe((data) => {
      expect(data).toBeTruthy();

      const firstYear = data[0];
      const lastYear = data[data.length - 1];

      expect(firstYear.season).toEqual(fromYear.toString());
      expect(lastYear.season).toEqual(toYear.toString());
    });

    const req = httpTestingController.expectOne(
      `${environment.racingApiEndpoint}/driverStandings/1.json?offset=${offset}&limit=${limit}`
    );
    expect(req.request.method).toEqual('GET');
  });

  it('should get the champion for 2015', () => {
    const year = 2015;

    service.getChampionForYear(year).subscribe((data) => {
      expect(data).toBeTruthy();

      const { season, StandingsLists } = data;

      expect(season).toEqual(year.toString());
      expect(StandingsLists[0].DriverStandings[0].Driver.driverId).toEqual(
        champion.driverId
      );
    });

    const req = httpTestingController.expectOne(
      `${environment.racingApiEndpoint}/${year}/driverStandings/1.json`
    );
    expect(req.request.method).toEqual('GET');

    req.flush(driverStandings);
  });

  it('should get results for year', () => {
    const year = 2015;
    service.getResultsForYear(year).subscribe((data) => {
      expect(data.Races).toBeTruthy();

      const { season, position, Races } = data;

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
