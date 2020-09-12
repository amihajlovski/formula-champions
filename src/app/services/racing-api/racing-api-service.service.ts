import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Response } from '../../models/response';
import { Standing } from '../../models/standing';

@Injectable({
  providedIn: 'root',
})
export class RacingApiServiceService {
  constructor(private http: HttpClient) {}

  getDriverStandings(offset: number, limit: number): Observable<Standing[]> {
    return this.http
      .get<Response>(
        `${environment.racingApiEndpoint}/driverStandings/1.json?offset=${offset}&limit=${limit}`
      )
      .pipe(map((data: Response) => data.MRData.StandingsTable.StandingsLists));
  }
}
