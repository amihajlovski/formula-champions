import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RaceTable } from 'src/app/models/race-table';
import { StandingsTable } from 'src/app/models/standings-table';
import { environment } from '../../../environments/environment';
import { Response } from '../../models/response';
import { Standing } from '../../models/standing';

@Injectable({
  providedIn: 'root',
})
export class RacingApiService {
  constructor(private http: HttpClient) {}

  getDriverStandings(offset: number, limit: number): Observable<Standing[]> {
    return this.http
      .get<Response>(
        `${environment.racingApiEndpoint}/driverStandings/1.json?offset=${offset}&limit=${limit}`
      )
      .pipe(map((data: Response) => data.MRData.StandingsTable.StandingsLists));
  }

  getChampionForYear(year: number): Observable<StandingsTable> {
    return this.http
      .get<Response>(
        `${environment.racingApiEndpoint}/${year}/driverStandings/1.json`
      )
      .pipe(map((data: Response) => data.MRData.StandingsTable));
  }

  getResultsForYear(year: number): Observable<RaceTable> {
    return this.http
      .get(`${environment.racingApiEndpoint}/${year}/results/1.json`)
      .pipe(map((data: Response) => data.MRData.RaceTable));
  }
}
